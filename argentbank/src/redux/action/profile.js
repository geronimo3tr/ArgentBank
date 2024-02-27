import { setProfile } from "../reducer/profileSlice";

export const profile = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

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
      dispatch(setProfile(profileData.body.userName));
    } else {
      alert("erreur login");
    }
  };
};
