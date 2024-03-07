import logo from "../../images/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutReducer } from "../../redux/reducer/userAuthSlice";
import { resetProfile } from "../../redux/reducer/profileSlice";

function Header() {
  const token = useSelector((state) => state.userAuth.token);
  const firstName = useSelector((state) => state.profile.firstname);
  const dispatch = useDispatch();

  const handleSingout = () => {
    dispatch(logoutReducer());
    dispatch(resetProfile());
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="Argent Bank Logo" />
      </Link>
      {token === null && (
        <Link to="/sing-in" className="sing-in">
          <i className="fas fa-user-circle"></i>
          Sign In
        </Link>
      )}
      {token != null && (
        <>
          <div className="logout-firstname">
            <div>
              <Link to="/user" className="firstname">
                <i className="fas fa-user-circle"></i>
                <span>{firstName}</span>
              </Link>
            </div>
            <Link to="/" className="sing-in" onClick={handleSingout}>
              <i className="fas fa-sign-out-alt"></i>
              Sign out
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
