import AuthAdapter from '../adapters/authAdapter'

export function loginUser(formData) {
  return function (dispatch) {
    dispatch({type: 'LOGGING_IN'})
    AuthAdapter.login(formData)
    .then(resp => {
      if (resp.error) {
        dispatch({type: 'LOGIN_FAILED', payload: resp.error})
      } else {
        dispatch({type: 'LOGIN_USER', payload: resp})
        window.localStorage.setItem('token', resp.token)
      }
    })
  }
}

export function logoutUser() {
  return function (dispatch) {
    window.localStorage.clear()
    dispatch({type: 'LOGOUT_USER'})
  }
}

export function clearErrors() {
  return {type: 'CLEAR_LOGIN_ERRORS'}
}
