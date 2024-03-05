import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",

  firstname: null,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.username = action.payload.userName;
      state.firstname = action.payload.firstName;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    resetProfile: (state) => {
      state.username = "";
      state.firstname = null;
    },
  },
});

export const { setProfile, resetProfile, setUsername } = profileSlice.actions;
export default profileSlice.reducer;
