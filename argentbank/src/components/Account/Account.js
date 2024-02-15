import React, { useState, useEffect } from "react";

const URL = "http://localhost:3001/api/v1/user/signup";

function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserName();
    }
  }, [isLoggedIn]);

  function userLogged() {
    return localStorage.getItem("token") !== null;
  }

  async function fetchUserName() {
    try {
      const response = await fetch.get("/user/details");
      setUserName(response.data.name);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  function changeLoginButton() {
    return isLoggedIn ? userName : "login";
  }

  return (
    <>
      <main className="dark-background">
        <article className="title-edit">
          <h1>welcome back {changeLoginButton()} </h1>
          <button>Edit Name</button>
        </article>
      </main>
    </>
  );
}

export default Account;
