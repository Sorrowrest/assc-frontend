import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";

export const initAxiosInstance = () => {
  axios.defaults.baseURL = "http://localhost:5000/";
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

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = {
      baseUrl: "http://localhost:5000/",
    }
  ): BaseQueryFn<
    {
      url: string;
      method: Method;
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
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
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
