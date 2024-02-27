import logo from "../../images/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutReducer } from "../../redux/reducer/userAuthSlice";

function Header() {
  const token = useSelector((state) => state.userAuth.token);
  const dispatch = useDispatch();

  const handleSingout = () => {
    dispatch(logoutReducer());
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </Link>
      {token === null && (
        <Link to="/sing-in">
          <div>
            <a className="sing-in" href="./sign-in">
              <i></i>
              Sign In
            </a>
          </div>
        </Link>
      )}
      {token != null && (
        <Link to="/" onClick={handleSingout}>
          <div>
            <a className="sing-in" href="./sign-in">
              <i></i>
              Sign out
            </a>
          </div>
        </Link>
      )}
    </header>
  );
}

export default Header;
