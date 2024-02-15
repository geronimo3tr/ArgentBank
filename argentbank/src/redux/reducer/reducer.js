// authReducer.js

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types/Types";

const initState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default Reducer;
