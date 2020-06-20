import { combineReducers } from 'redux';
import loginReducer from './Components/Login/loginReducer'

const rootReducer = combineReducers({
  login: loginReducer
});
export default rootReducer;