import { combineReducers } from "redux";
import counterReducer from "./counterReducer.jsx";

const reducers = combineReducers({
  // Add reducers here
  counterReducer,
});

export default reducers;
