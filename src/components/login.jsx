import { Input } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import { signUserFailure, signUserStart, signUserSucces } from "../slice/auth";
import { useEffect, useState } from "react";
import AuthServise from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthServise.userLogin(user);
      dispatch(signUserSucces(response.user));
      navigate("/");
    } catch (error) {
      console.log(error.response.data.errors);
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="text-center my-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            className="mb-4"
            src="https://cdn.dribbble.com/users/4538838/screenshots/14857111/media/c841963bf7c7b855030c0bf197da03fd.jpg?compress=1&resize=400x300&vertical=top"
            alt=""
            width="150px"
            style={{ borderRadius: "15px" }}
          />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <ValidationError />
          <div className="my-1">
            <Input
              label={"Email"}
              state={email}
              setState={setEmail}
              type={"email"}
            />
            <Input
              label={"Password"}
              state={password}
              setState={setPassword}
              type={"password"}
            />
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={loginHandler}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
