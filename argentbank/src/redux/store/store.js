import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducer from "../reducer/userAuthSlice";

export const store = configureStore({
  reducer: {
    userAuth: reducer,
    middleware: [thunk],
    devTools: true,
  },
});
