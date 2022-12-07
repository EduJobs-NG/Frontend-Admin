import axios from "axios";

const BASE_URL = "https://edujobsng.up.railway.app/api/v1/admin";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
