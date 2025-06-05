import { createSlice } from "@reduxjs/toolkit";
import controller from "../../services/requests/request";
import { endpoints } from "../../constants";

const userId = localStorage.getItem("userId");
const initialState = { user: null };
if (userId) {
  const user = await controller.getOne(endpoints.users, JSON.parse(userId));
  if (user?.id) {
    delete user.password;
    initialState.user = { ...user };
  }
} else {
  localStorage.setItem("userId", JSON.stringify(null));
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.user = { ...action.payload };
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
