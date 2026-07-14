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

export const getChildren = () =>
    API.get("/children");

export const addChild = (data) =>
    API.post("/children", data);

export const updateChild = (id, data) =>
    API.put(`/children/${id}`, data);

export const deleteChild = (id) =>
    API.delete(`/children/${id}`);

export default API;