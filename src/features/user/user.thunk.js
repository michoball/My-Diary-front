import { createAsyncThunk } from "@reduxjs/toolkit";
import userThunk from "./user.api";

// Register new user
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await userThunk.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login user
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    return await userThunk.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

//Logout user
export const logout = createAsyncThunk("user/logout", async () => {
  await userThunk.logout();
});
