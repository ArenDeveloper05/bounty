import axios from "axios";

const APIUrl = "https://89de-212-34-250-11.eu.ngrok.io/";

const api = axios.create({
    baseURL: APIUrl,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

//POST
export const signUp = async (signUpData) => {
    return await api.post(`/api/register`, signUpData);
};
export const login = async (loginData) => {
    return await api.post(`/api/login`, loginData);
};

