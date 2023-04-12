import { Route, Routes } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./index";
import { useDispatch } from "react-redux";
import AuthServise from "../service/auth";
import { signUserSucces } from "../slice/auth";
import { useEffect } from "react";
import { getItem } from "../helper/storage";
import ArticleServise from "../service/article";
import {
  getArticlesFailure,
  getArticlesStart,
  getArticlesSucces,
} from "../slice/articles";
import ArticlesCard from "./articles-card";

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

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleServise.getArticles();
      dispatch(getArticlesSucces(response.articles));
    } catch (error) {
      dispatch(getArticlesFailure());
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container mb-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles/:slug" element={<ArticlesCard />} />
        </Routes>
      </div>
    </div>
  );
};
