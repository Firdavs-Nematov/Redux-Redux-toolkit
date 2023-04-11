import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import ArticleReducer from "../slice/articles";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    articles: ArticleReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
