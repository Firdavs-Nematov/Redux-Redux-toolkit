import { useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} from "../slice/auth";
import AuthServise from "../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = { username: name, email, password };
    try {
      const responce = await AuthServise.userRegister(user);
      console.log(responce);
      dispatch(registerUserSuccess());
    } catch (error) {
      dispatch(registerUserFailure());
    }
  };

  return (
    <div className="text-center mt-5">
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
          <div className="my-5">
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
