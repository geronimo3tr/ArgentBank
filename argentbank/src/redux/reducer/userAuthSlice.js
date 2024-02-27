import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logoutReducer: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { loginReducer, logoutReducer } = userAuthSlice.actions;
export default userAuthSlice.reducer;
