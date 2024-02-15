import React from "react";

function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      localStorage.setItem("token", responseData.token);
      window.location.href = "../user";
    } catch (error) {
      if (error instanceof SyntaxError || error instanceof TypeError) {
        alert("Une erreur réseau est survenue. Réessayez plus tard.");
      } else {
        alert(error.message || "Une erreur est survenue. Réessayez plus tard.");
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

export default LoginForm;
