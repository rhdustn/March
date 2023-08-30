import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
    name: "",
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id; 
      state.pw = action.payload.pw; 
    },
    logout: (state) => {
      state.id = "";
      state.pw = "";
      state.name = "";
    },
  },
});

const initialState = {
  id: "",
  password: "",
  nickname: "",
};

export const SignUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetFields: (state) => {
      state.id = "";
      state.password = "";
      state.nickname = "";
    },
  }, // 그럼 월 화 수 
});

export const { login, logout } = userSlice.actions;
export const { updateField, resetFields } = SignUpSlice.actions;

export default userSlice.reducer;