import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  firstname: null,
  lastname: null,
  id: null,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.username = action.payload.userName;
      state.firstname = action.payload.firstName;
      state.lastname = action.payload.lastName;
      state.id = action.payload.id;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    resetProfile: (state) => {
      state.username = "";
      state.firstname = null;
      state.lastname = null;
      state.id = null;
    },
  },
});

export const { setProfile, resetProfile, setUsername } = profileSlice.actions;
export default profileSlice.reducer;
