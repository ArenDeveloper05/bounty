import { configureStore } from "@reduxjs/toolkit";
// Reducers
import authReducer from "./slices/authSlice"
import projectsReducer from "./slices/projectsSlice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectsReducer
    }
});

export default store;