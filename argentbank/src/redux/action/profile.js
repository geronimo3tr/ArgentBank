import { setProfile, resetProfile } from "../reducer/profileSlice";
import { store } from "../store/store";

export const profile = () => {
  return async (dispatch) => {
    const state = store.getState();
    const token = state.userAuth.token;

    const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (profileResponse.ok) {
      const profileData = await profileResponse.json();
      dispatch(setProfile(profileData.body));
    } else {
      dispatch(resetProfile());
      window.location.href = "/sing-in";
    }
  };
};
