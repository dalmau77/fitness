import axios from 'axios';
import { HOST } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';

export function handleLoginEmail(email) {
  return {
    type: 'HANDLE_LOGIN_EMAIL',
    payload: { email }
  }
}

export function handleLoginPassword(password) {
  return {
    type: 'HANDLE_LOGIN_PASSWORD',
    payload: { password }
  }
}

export function handleLoginSubmit(email, password) {
  return dispatch => {
    return dispatch({
      type: 'HANDLE_LOGIN_SUBMIT',
      payload: axios.post(`${HOST}/api/Consumers/login`, {
        email: email.toLowerCase(),
        password: password
      })
        .then(res => {
          const data = res.data;
          dispatch(getCustomerInfo(data.userId))
          Actions.landing()
          return { data }
        })
        .catch(err => alert('Login attempt failed. Wrong username or password.'))
    })
  }
}

function getCustomerInfo(userId) {
  return dispatch => {
    return dispatch({
      type: 'HANDLE_GET_CUSTOMER_INFO',
      payload: axios.get(`${HOST}/api/Consumers/${userId}`)
    })
  }
}

export function destroyToken(token) {
  console.log('hi')
  return dispatch => {
    return dispatch({
      type: 'DESTROY_TOKEN',
      payload: axios.post(`${HOST}/api/Consumers/logout?access_token=${token}`)
    })
    .then(res => Actions.login())
    .catch(err => alert('error logging out'))
  }
}