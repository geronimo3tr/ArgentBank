import { loginReducer } from "../reducer/userAuthSlice";

export const login = (email, password) => {
  return async (dispatch) => {
    // Call API to authenticate the user
    const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      dispatch(loginReducer({ token: loginData.body.token }));
    } else {
      alert("erreur login");
    }
  };
};
