import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <section className="sing-in-form">
        <i class="fas fa-user-circle"></i>
        <h1>Sing In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="username">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <Link to="/user">
            <button href="./user">Sign In</button>
          </Link>
        </form>
      </section>
    </>
  );
}

export default Form;
