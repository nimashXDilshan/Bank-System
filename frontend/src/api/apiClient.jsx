import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Base URL for your API
  timeout: 10000, // Optional: set a timeout for requests
  withCredentials: true,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (token) {
      config.headers = config.headers || {}; // Ensure headers exist
      config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized! Redirecting to login...');
      window.location.href = '/userlogin'; // Adjust as needed
    }
    return Promise.reject(error);
  }
);

export default api;
