import { store } from "../store/store";
import { setUsername } from "../../redux/reducer/profileSlice";

export const editUsername = async (newUsername, dispatch) => {
  const state = store.getState();
  const token = state.userAuth.token;

  // Call API to authenticate the user
  const editResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userName: newUsername }),
  });

  if (editResponse.ok) {
    dispatch(setUsername(newUsername));
  } else {
    alert("erreur login");
  }
};
