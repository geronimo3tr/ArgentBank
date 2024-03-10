import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: null,
  password: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logoutReducer: (state) => {
      state.token = null;
      state.email = null;
      state.password = null;
    },
  },
});

export const { loginReducer, logoutReducer } = userAuthSlice.actions;
export default userAuthSlice.reducer;
