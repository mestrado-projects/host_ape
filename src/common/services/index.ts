import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL as string;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

interface AuthValues {
  email: string;
  password: string;
}

interface ReservationData {
  [key: string]: any;
}

function config(token: string): AxiosRequestConfig {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function authLogin(values: AuthValues) {
  const { email, password } = values;
  return axiosInstance.post("/sign-in", { email, password });
}

function authSignUp(values: AuthValues) {
  const { email, password } = values;
  return axiosInstance.post("/sign-up", { email, password });
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

const inputAddInformations = {
  getApartments,
  getApartmentById,
};

const api = {
  authLogin,
  authSignUp,
  getApartments,
  getApartmentById,
  getReservationById,
  requestReservation,
  createReservation,
  inputAddInformations,
};

export default api;
