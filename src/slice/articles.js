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
  },
});
export const {
  getArticlesStart,
  getArticlesSucces,
  getArticlesFailure,
  getArticlesDetailsStart,
  getArticlesDetailsSucces,
  getArticlesDetailsFailure,
} = articlesSlice.actions;

export default articlesSlice.reducer;
