import { setProfile } from "../reducer/profileSlice";

export const profile = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    // Call API to authenticate the user
    const editResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (editResponse.ok) {
      const profileData = await editResponse.json();
      console.log("username:", profileData);
      dispatch(setProfile(profileData.body));
    } else {
      alert("erreur login");
    }
  };
};
