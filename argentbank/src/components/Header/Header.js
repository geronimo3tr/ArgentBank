import logo from "../../images/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img class="logo" src={logo} alt="Argent Bank Logo" />
      </Link>
      <Link to="/sing-in">
        <div>
          <a class="sing-in" href="./sign-in">
            <i></i>
            Sign In
          </a>
        </div>
      </Link>
    </header>
  );
}

export default Header;
