import axios from 'axios';

const BASE_URL = 'https://api.edujobsng.com/api/v1/admin';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
