import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userAuthSlice from "../reducer/userAuthSlice";
import profileSlice from "../reducer/profileSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    profile: profileSlice,
    middleware: [thunk],
    devTools: true,
  },
});
