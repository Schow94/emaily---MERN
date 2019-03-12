import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // console.log(action);

  switch (action.type) {
    case FETCH_USER:
      //action.payload is the user model when loggedIn
      //when loggedOut, action.payload is an empty string
      return action.payload || false;
    default:
      return state;
  }
}
