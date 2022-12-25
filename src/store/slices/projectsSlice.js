import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    projects: []
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProjects(state, { payload }) {
            state.projects = payload;
        }
    },
});

export const { addProjects } = projectsSlice.actions;
export default projectsSlice.reducer;