
export function loginUser(formData) {
  return function (dispatch) {
    dispatch({type: 'LOGGING_IN'})
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      body: formData
    })
    .then(resp => resp.json())
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
