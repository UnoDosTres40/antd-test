import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://93.183.80.218:8000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
