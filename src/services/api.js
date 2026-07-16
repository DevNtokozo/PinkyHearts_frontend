import axios from "axios";

const API = axios.create({
    baseURL: "http://pinkyheartsbackend-production.up.railway.app/api",
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

export const getPayments = () =>
    API.get("/payments");

export const addPayment = (data) =>
    API.post("/payments", data);

export const updatePayment = (id, data) =>
    API.put(`/payments/${id}`, data);

export const deletePayment = (id) =>
    API.delete(`/payments/${id}`);

// Attendance APIs
export const getAttendance = () =>
    API.get("/attendance");

export const markAttendance = (data) =>
    API.post("/attendance", data);

export const checkOut = (id) =>
    API.put(`/attendance/${id}/checkout`);

export const deleteAttendance = (id) =>
    API.delete(`/attendance/${id}`);

export const getEvents = () =>
    API.get("/events");

export const addEvent = (data) =>
    API.post("/events", data);

export const updateEvent = (id, data) =>
    API.put(`/events/${id}`, data);

export const deleteEvent = (id) =>
    API.delete(`/events/${id}`);

export default API;