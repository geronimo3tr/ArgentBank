import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  newUsername: "",
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
    resetProfile: (state) => {
      state.username = "";
      state.firstname = null;
    },
    setNewUsername: (state, action) => {
      state.newUsername = action.payload;
    },
  },
});

export const { setProfile, resetProfile, setNewUsername } = profileSlice.actions;
export default profileSlice.reducer;
