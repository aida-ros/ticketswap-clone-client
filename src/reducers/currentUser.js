import { LOGIN_SUCCESS } from '../actions/login';


export const currentUser = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload
    default:
      return state
  }
}