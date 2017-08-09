export default function authReducer(
  state = {
    loggedIn: false,
    currentUser: null,
    errors: [],
    loggingIn: false
  }, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {loggedIn: true, loggingIn: false, currentUser: action.payload}
    case "LOGOUT_USER":
      return {loggedIn: false, currentUser: null}
    case "LOGIN_FAILED":
      return {...state, loggingIn: false, errors:[action.payload]}
    case "LOGGING_IN":
      return {...state, loggingIn: true, errors:[]}
    case "CLEAR_LOGIN_ERRORS":
      return {...state, errors:[]}
    default:
      return state
  }
}
