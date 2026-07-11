import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const register = (user) => API.post("/register", user);

export const login = (user) => API.post("/login", user);

export const getUsers = () => API.get("/users");

export const deleteUser = (id) => API.delete(`/users/${id}`);

export default API;