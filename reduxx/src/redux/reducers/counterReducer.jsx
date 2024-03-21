import * as actionTypes from "../actions/actionTypes.jsx";

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }

    // const { type, payload } = action;
    //
    // switch (type) {
    //     case actionTypes.INCREASE_COUNTER:
    //         return state + payload;
    //     case actionTypes.DECREASE_COUNTER:
    //         return state - payload;
    //     case actionTypes.INCREASE_BY_TWO_COUNTER:
    //         return state + payload;
    //     default:
    //         return state;
    // }

};
export default counterReducer;
