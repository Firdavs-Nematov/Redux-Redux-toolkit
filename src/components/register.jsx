import { useState } from "react";
import { Input } from "../ui";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
