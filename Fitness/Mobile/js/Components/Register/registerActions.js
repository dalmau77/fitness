import axios from 'axios';
import { HOST } from 'react-native-dotenv';
import { Actions } from 'react-native-router-flux';

export function handleUsername(username) {
  return {
    type: 'HANDLE_USERNAME',
    payload: { username }
  }
}

export function handleRegisterEmail(email) {
  return {
    type: 'HANDLE_REGISTER_EMAIL',
    payload: { email }
  }
}

export function handleRegisterPassword(password) {
  return {
    type: 'HANDLE_REGISTER_PASSWORD',
    payload: { password }
  }
}

export function handleConfirmedRegisterPassword(confirmedPassword) {
  return {
    type: 'HANDLE_CONFIRMED_REGISTER_PASSWORD',
    payload: { confirmedPassword }
  }
}

export function handleRegisterSubmit(username, email, password) {
  return dispatch => {
    return dispatch({
      type: 'HANDLE_CREATE_USER_SUBMIT',
      payload:
      axios.post(`${HOST}/api/Consumers`, {
        username: username,
        email: email.toLowerCase(),
        password: password,
      })
          .then(res => 
            axios.post(`${HOST}/api/Consumers/login`, {
              email: email.toLowerCase(),
              password: password
            })
              .then(res => {
                const data = res.data
                dispatch(getCustomerInfo(data.userId))
                Actions.landing()
                return { data }
              })
              .catch(err => alert('Login attempt failed. Wrong username or password.'))
          )
          .catch(err => alert('Oops. Something went wrong.'))
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
