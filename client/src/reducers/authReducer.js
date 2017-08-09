export default function authReducer(
  state = {
    loggedIn: false,
    currentUser: null,
    errors: []
  }, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {loggedIn: true, currentUser: action.payload}
    case "LOGOUT_USER":
      return {loggedIn: false, currentUser: null}
    case "LOGIN_FAILED":
      return {...state, errors:[action.payload]}
    case "LOGGING_IN":
      return {...state, errors:[]}
    case "CLEAR_LOGIN_ERRORS":
      return {...state, errors:[]}
    default:
      return state
  }
}
