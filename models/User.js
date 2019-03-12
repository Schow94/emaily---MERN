const mongoose = require('mongoose');
const { Schema } = mongoose;

// const Schema = mongoose.Schema
// ^^ destructuring - Same thing

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

//(name of collection, Schema)
mongoose.model('users', userSchema);
