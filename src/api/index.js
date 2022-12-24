import axios from "axios";

const APIUrl = "https://1e53-87-241-188-229.eu.ngrok.io/api";

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

