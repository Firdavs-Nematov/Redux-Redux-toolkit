import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSucces: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesFailure: (state, action) => {
      state.error = action.payload;
    },
    getArticlesDetailsStart: (state) => {
      state.isLoading = true;
    },
    getArticlesDetailsSucces: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticlesDetailsFailure: (state) => {
      state.isLoading = false;
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state) => {
      state.isLoading = false;
    },
    postArticleFailure: (state) => {
      state.error = "Error";
    },
  },
});
export const {
  getArticlesStart,
  getArticlesSucces,
  getArticlesFailure,
  getArticlesDetailsStart,
  getArticlesDetailsSucces,
  getArticlesDetailsFailure,
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} = articlesSlice.actions;

export default articlesSlice.reducer;
