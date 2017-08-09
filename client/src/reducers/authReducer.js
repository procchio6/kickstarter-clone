export default function authReducer(state={loggedIn: false, currentUser: null}, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {loggedIn: true, currentUser: action.payload}
    default:
      return state
  }
}
