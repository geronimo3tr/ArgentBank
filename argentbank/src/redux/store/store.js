import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userAuthSlice from "../reducer/userAuthSlice";
import profileSlice from "../reducer/profileSlice";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userAuthPersistConfig = {
  key: "userAuth",
  storage,
};
const profilePersistConfig = {
  key: "profile",
  storage,
};
const persistedUserAuthSlice = persistReducer(userAuthPersistConfig, userAuthSlice);
const persistedProfileSlice = persistReducer(profilePersistConfig, profileSlice);

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
    }).concat(thunk),
  devTools: true,
});

export const persistedStore = persistStore(store);
