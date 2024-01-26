import logo from "../../images/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img class="logo" src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        <a class="sing-in" href="./sign-in.html">
          <i></i>
          Sign In
        </a>
      </div>
    </header>
  );
}

export default Header;
