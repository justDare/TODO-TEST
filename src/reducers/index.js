import { combineReducers } from "redux";
// import sitesReducer from './sitesReducer';
import todoReducer from "./todoReducer";

export default combineReducers({
  todos: todoReducer,
});
