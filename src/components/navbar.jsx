import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Full Stack Exchange
          </Link>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
