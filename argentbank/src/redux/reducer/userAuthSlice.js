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
    },
    logoutReducer: (state) => {
      state.token = null;
    },
  },
});

export const { loginReducer, logoutReducer } = userAuthSlice.actions;
export default userAuthSlice.reducer;
