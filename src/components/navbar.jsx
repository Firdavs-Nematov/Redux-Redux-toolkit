import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../helper/storage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container mb-3">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Full Stack Exchange
          </Link>
          <nav className="d-flex align-items-center mt-2 mt-md-0 ms-md-auto">
            {loggedIn ? (
              <>
                <p className="px-3 m-0 text-capitalize">{user.username}</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={logOutHandler}
                >
                  Log out
                </button>
              </>
            ) : (
              <div className="d-flex">
                <Link
                  to={"/login"}
                  className="mx-5"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
