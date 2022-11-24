import axios from "axios";

export const initAxiosInstance = () => {
  axios.defaults.baseURL = "http://b45b-89-113-91-97.ngrok.io";
  const token = localStorage.getItem("accessToken");
  axios.interceptors.request.use(async (config) => {
    if (!config.headers) {
      config.headers = {};
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  return !!token;
};
