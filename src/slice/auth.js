import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Login
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    loginUserFailure: (state) => {
      state.error = "error";
      state.loggedIn = false;
      state.isLoading = false;
    },

    //Register
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    registerUserFailure: (state) => {
      state.error = "error";
      state.loggedIn = false;
      state.isLoading = false;
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
