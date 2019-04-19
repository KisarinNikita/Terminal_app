import { combineReducers } from 'redux';
import auth from "./authReducer";
import info from "./userReducer";

export default combineReducers({
  info,
  auth,
})
