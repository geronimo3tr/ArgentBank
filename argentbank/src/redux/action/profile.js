import { setProfile } from "../reducer/profileSlice";
import { store } from "../store/store";

export const profile = () => {
  return async (dispatch) => {
    const state = store.getState();
    const token = state.userAuth.token;

    // Call API to authenticate the user
    const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (profileResponse.ok) {
      const profileData = await profileResponse.json();
      console.log("username:", profileData);
      dispatch(setProfile(profileData.body));
    } else {
      alert("erreur login");
    }
  };
};
