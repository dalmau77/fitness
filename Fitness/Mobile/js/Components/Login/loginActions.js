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