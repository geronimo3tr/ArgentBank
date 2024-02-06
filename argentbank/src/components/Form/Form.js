import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };

    try {
      const response = await axios.post("/login", login);
      localStorage.setItem("token", response.data.token);
      window.location.href = "../user";
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 404) {
          alert("Erreur dans l'identifiant ou le mot de passe");
        } else {
          alert("Une erreur est survenue. Réessayez plus tard.");
        }
      } else {
        alert("Une erreur réseau est survenue. Réessayez plus tard.");
      }
    }
  };

  return (
    <>
      <section className="sign-in-form">
        <i className="fas fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </>
  );
}

export default Form;
