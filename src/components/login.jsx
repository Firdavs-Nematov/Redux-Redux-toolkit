import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui";
import { loginUserStart } from "../slice/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);
    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUserStart());
    };

    return (
        <div className="text-center mt-5">
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
                    <div className="my-5">
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
