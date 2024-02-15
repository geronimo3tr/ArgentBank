import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reducer from "../reducer/reducer";

export const store = configureStore({
  reducer: {
    user: reducer,
    middleware: [thunk],
  },
});
