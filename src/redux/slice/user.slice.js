import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  UserInfo: {},
  loading: false
};

export const getUsers = createAsyncThunk("users/get", async () => {
  const res = await axios.get("/api/user/all");
  return res.data;
});

const userSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setLoginUserRequestInfoDetails(state, action) {
      return {
        ...state,
        UserInfo: {
          ...action.payload,
        },
      };
    }
  }
});

export const {
  setLoginUserRequestInfoDetails,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
