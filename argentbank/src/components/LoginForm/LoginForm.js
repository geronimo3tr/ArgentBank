import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password));
      navigate("/user");
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <section className="sign-in-form">
        <div className="title">
          <i className="fas fa-user-circle"></i>
          <h1>Sign In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div>
            <span className="error-message">{errorMessage}</span>
          </div>
          <button type="submit">Sign-In</button>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
