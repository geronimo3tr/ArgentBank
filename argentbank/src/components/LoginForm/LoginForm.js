import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (rememberMe) {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      if (storedEmail && storedPassword) {
        setEmail(storedEmail);
        setPassword(storedPassword);
      }
    }
  }, [rememberMe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(email, password));
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }
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
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
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
