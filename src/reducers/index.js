import loggedReducer from "./isLogin";
import counterReducer from "./counter";
import { combineReducers } from 'redux';

const allReducers=combineReducers({
   counterReducer,
   loggedReducer
    });
export default allReducers;