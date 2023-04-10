import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  console.log(loggedIn);
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Full Stack Exchange
          </Link>
          <nav className="d-flex align-items-center mt-2 mt-md-0 ms-md-auto">
            {loggedIn ? (
              <>
                <p className="px-3 m-0 text-capitalize">{user.username}</p>
                <button className="btn btn-outline-danger">Log out</button>
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
