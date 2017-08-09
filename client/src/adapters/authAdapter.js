import headers from './headers'

const baseUrl = 'http://localhost:3000/api/v1'

export default class AuthAdapter {
  static login (loginParams) {
    return fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static signUp (signUpParams) {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify(signUpParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(`${baseUrl}/me`, {
      headers
    }).then(res => res.json())
  }
}
