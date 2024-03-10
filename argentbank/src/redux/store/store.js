import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userAuthSlice from "../reducer/userAuthSlice";
import profileSlice from "../reducer/profileSlice";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedUserAuthSlice = persistReducer(persistConfig, userAuthSlice);
const persistedProfileSlice = persistReducer(persistConfig, profileSlice);

export const store = configureStore({
  reducer: {
    userAuth: persistedUserAuthSlice,
    profile: persistedProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(thunk), // Combining middleware correctly
  devTools: true, // This should be outside of the reducer object
});

export const persistedStore = persistStore(store);
