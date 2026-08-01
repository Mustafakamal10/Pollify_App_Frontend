import axios from 'axios';

const apiBaseURL = (import.meta.env.VITE_API_BASE_URL || 'https://pollify-app-backend.vercel.app/api').replace(/\/$/, '');

// create a single instance
const api = axios.create({ baseURL: apiBaseURL });

// attach jwt token to any request //check user logedin or not
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;