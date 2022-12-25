import axios from "axios";

export const APIUrl = "https://49b1-62-89-0-182.eu.ngrok.io/api";

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
    return await api.get(`/all-projects`);
};
export const getSingleProject = async (userId, id) => {
    return await api.get(`/projects/${userId}/${id}`);
};
export const getReports = async (organizatorId) => {
    return await api.get(`/reports/${organizatorId}`);
};

//POST
export const signUp = async (signUpData) => {
    return await api.post(`/register`, signUpData);
};
export const logIn = async (loginData) => {
    return await api.post(`/login`, loginData);
};
export const postReport = async (reportData, organizatorId, projectId, hunterId) => {
    return await api.post(`/reports/${organizatorId}/${projectId}/${hunterId}`, reportData);
};

export const addProject = async (projectData, id) => {
    return await api.post(`/projects/${id}`, projectData);
};
export const postChatMessage = async (message) => {
    return await api.post(`chat/`, message);
};
export const uploadProjectImage = async (organizatorId, id, sendData, headers) => {
    return await api.post(`projects/upload/${organizatorId}/${id}`, sendData, headers);
};






