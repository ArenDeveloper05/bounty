import axios from "axios";

const APIUrl = "https://fc27-87-241-189-213.eu.ngrok.io/api";

const api = axios.create({
    baseURL: APIUrl,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    withCredentials: true
});


//GET
export const getAllProjects = async () => {
    return await api.get(`/projects`);
};
export const getSingleProject = async (id) => {
    return await api.get(`/projects/${id}`);
};

//POST
export const signUp = async (signUpData) => {
    return await api.post(`/register`, signUpData);
};
export const logIn = async (loginData) => {
    return await api.post(`/login`, loginData);
};
export const postReport = async (reportData) => {
    return await api.post(`/reports`, reportData);
};

export const addProject = async (projectData, id) => {
    return await api.post(`/projects/${id}`, projectData);
};


