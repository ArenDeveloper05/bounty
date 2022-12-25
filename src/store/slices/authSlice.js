import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: localStorage.getItem("token") ? true : false,
    type: localStorage.getItem("type"),
    userId: localStorage.getItem("userId"),
    notifications: localStorage.getItem("notifications"),
    email: localStorage.getItem("email")
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, { payload }) {
            state.isLogged = true;
        },
        logout(state) {
            state.isLogged = false;
        },
        changeType(state, { payload }) {
            console.log(payload, "payload");
            state.type = payload;
        },
        notification(state, { payload }) {
            state.notifications = payload;
        },
        email(state, { payload }) {
            state.email = payload;
        },
    },
});

export const { login, logout, changeType, notification, email } = authSlice.actions;
export default authSlice.reducer;