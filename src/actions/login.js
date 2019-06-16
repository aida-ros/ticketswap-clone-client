import request from 'superagent'
const baseUrl = 'http://localhost:4000'

// Sends log in data
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const loginSuccess = (jwt) => ({
  type: LOGIN_SUCCESS,
  payload: jwt
})

export const login = (username, password) => dispatch => {
  console.log("LOGIN FUNCTION")
  const name = username
  const pass = password

  request
    .post(`${baseUrl}/logins`)
    .send({ username: name, password: pass })
    .then(response => {
      console.log('RESPONSE BODY:', response.body)
      dispatch(loginSuccess(response.body.jwt))
      console.log('LOGIN DISPATCHED')
    })
    .catch(console.error)
}

export const signup = (username, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ username, password })
    .then(response => {
      console.log('RESPONSE BODY:', response.body)
    })
    .catch(console.error)
}