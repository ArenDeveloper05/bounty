import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLogged: localStorage.getItem("token") ? true : false,
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
        }
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;