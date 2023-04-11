import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
};

export const articlesSlice = createSlice({
  name: "artcles",
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
  },
});
export const { getArticlesStart, getArticlesSucces, getArticlesFailure } =
  articlesSlice.actions;

export default articlesSlice.reducer;
