const defaultState = {
  loginEmail: '',
  loginPassword: '',
}

export default function LoginReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'HANDLE_LOGIN_EMAIL': {
      return {
        ...state,
        loginEmail: payload.email.toLowerCase()
      }
    }

    case 'HANDLE_LOGIN_PASSWORD': {
      return {
        ...state,
        loginPassword: payload.password
      }
    }
    default: {
      return state;
    }
  }  
}