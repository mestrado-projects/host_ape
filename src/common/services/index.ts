import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.REACT_APP_API_URL as string;

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
  return axios.post(`${BASE_URL}/sign-in`, { email, password });
}

function authSignUp(values: AuthValues) {
  const { email, password } = values;
  return axios.post(`${BASE_URL}/sign-up`, { email, password });
}

function getProperties(token: string) {
  return axios.get(`${BASE_URL}/properties`, config(token));
}

function getAccommodationInfo(token: string) {
  return axios.get(`${BASE_URL}/accommodation`, config(token));
}

function getReservationById(token: string, id: string | number) {
  return axios.get(`${BASE_URL}/reservation/${id}`, config(token));
}

function requestReservation(data: ReservationData, token: string) {
  return axios.post(`${BASE_URL}/reservation/request`, data, config(token));
}

function createReservation(data: ReservationData, token: string) {
  return axios.post(`${BASE_URL}/reservation/create`, data, config(token));
}

const inputAddInformations = {
  getProperties,
  getAccommodationInfo,
};

const api = {
  authLogin,
  authSignUp,
  getProperties,
  getAccommodationInfo,
  getReservationById,
  requestReservation,
  createReservation,
  inputAddInformations,
};

export default api;
