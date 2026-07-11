import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const register = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);

export const getUsers = () => API.get("/users");

export const updateUser = (id, data) =>
    API.put(`/users/${id}`, data);

export const deleteUser = (id) =>
    API.delete(`/users/${id}`);

export default API;