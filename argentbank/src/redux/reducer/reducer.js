import { stateInit } from "../../app/store";

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
