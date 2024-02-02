import { Link } from "react-router-dom";

function Singin() {
  return (
    <>
      <main className="dark-background">
        <section className="sing-in-card">
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
      </main>
    </>
  );
}

export default Singin;
