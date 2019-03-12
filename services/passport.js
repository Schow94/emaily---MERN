// passport package
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//OAuths only purpose is to allow someone to sign in
// after signed in, we use our own internal(mongo) IDs to keep track of users

// user.id is either existingUser or new User
// user.id is a shortcut to _id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//not sure why it's not user.id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // _id is an id created by mongo and assigned to this record
      // profile.id is our googleId on mLab
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
