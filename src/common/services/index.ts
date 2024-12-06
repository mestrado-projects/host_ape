import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL as string;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

interface AuthValues {
  email: string;
  password: string;
}

interface AuthSignUpValues {
  name: string;
  phone: string;
  email: string;
  password: string;
}

interface AuthUpdateValues {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
}

interface ReservationData {
  [key: string]: any;
}

function config(token: string): AxiosRequestConfig {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function authLogin(values: AuthValues) {
  const { email, password } = values;
  return axiosInstance.post("/guests/sign-in", { email, password });
}

function authSignUp(values: AuthSignUpValues) {
  const { name, phone, email, password } = values;
  return axiosInstance.post("/guests/sign-up", { name, phone, email, password });
}

function getCustomer(id: string, token: string) {
  return axiosInstance.get(`/guest/${id}`, config(token));
}

function updateCustomer(values: AuthUpdateValues, token: string) {
  const { id, ...data } = values;
  return axiosInstance.put(`/guest/${id}`, data, config(token));
}

function deleteCustomer(id: string, token: string) {
  return axiosInstance.delete(`/guest/${id}`, config(token));
}

function getApartments() {
  return axiosInstance.get("/apartments");
}

function getApartmentById(id: string) {
  return axiosInstance.get(`/apartments/${id}`);
}

function getReservationById(token: string, id: string | number) {
  return axiosInstance.get(`/reservation/${id}`, config(token));
}

function requestReservation(data: ReservationData, token: string) {
  return axiosInstance.post("/reservation/request", data, config(token));
}

function createReservation(data: ReservationData, token: string) {
  return axiosInstance.post("/reservation/create", data, config(token));
}

// Export API
const api = {
  authLogin,
  authSignUp,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  getApartments,
  getApartmentById,
  getReservationById,
  requestReservation,
  createReservation,
};

export default api;
