import { combineReducers } from 'redux';
import loginReducer from './Components/Login/loginReducer';
import registerReducer from './Components/Register/registerReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer
});
export default rootReducer;