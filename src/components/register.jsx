import { useEffect, useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSucces } from "../slice/auth";
import AuthServise from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const responce = await AuthServise.userRegister(user);
      dispatch(signUserSucces(responce.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="text-center my-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            className="mb-4"
            src="https://www.pngkit.com/png/detail/334-3347027_register-icon-png-register-here-logo.png"
            alt=""
            width="150px"
            style={{ borderRadius: "15px" }}
          />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <ValidationError />
          <div className="my-1">
            <Input label={"Username"} state={name} setState={setName} />
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
            onClick={registerHandler}
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
