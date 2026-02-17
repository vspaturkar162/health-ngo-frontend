// import axios from 'axios';
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
//   timeout: 15000
// });
// export default api;

import axios from 'axios';

// ✅ In production (Vercel), vercel.json proxies /api/* to Render
// ✅ In development, use localhost:4000
const baseURL =
  process.env.NODE_ENV === 'production'
    ? ''  // Empty = use relative URLs, vercel.json handles the proxy
    : 'http://localhost:4000';

const api = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});

// ✅ Add request interceptor to attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Add response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/admin/auth';
    }
    return Promise.reject(error);
  }
);

export default api;