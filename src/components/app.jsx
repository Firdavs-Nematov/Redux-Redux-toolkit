import { Route, Routes } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./index";
import { useDispatch } from "react-redux";
import AuthServise from "../service/auth";
import { signUserSucces } from "../slice/auth";
import { useEffect } from "react";
import { getItem } from "../helper/storage";

export const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthServise.getUser();
      dispatch(signUserSucces(response.user));
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
