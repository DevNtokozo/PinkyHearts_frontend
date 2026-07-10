import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const register = (userData) => api.post("/register", userData);

export const login = (loginData) => api.post("/login", loginData);

export const getUsers = () => api.get("/users");

export default api;