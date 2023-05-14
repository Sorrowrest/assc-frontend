import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.scss";
import { Router } from "./pages/router";
import { theme } from "@app/theme";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initAxiosInstance } from "@core/services/api";
import "react-big-calendar/lib/sass/styles.scss";
import "dayjs/locale/ru";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

dayjs.extend(isBetween);

initAxiosInstance();

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (err: any) => {
          if (err?.response.data.message) {
            toast.error(
              `${err?.response.data.message} - ${err.response.status}`
            );
          }
          throw new Error(err);
        },
        onSuccess: (res: any) => {
          if (res?.response.data.message) {
            toast.success(`${res?.response.data.message}`);
          }
        },
      },
      queries: {
        retry: false,
        onError: (err: any) => {
          if (err?.response.data.message) {
            toast.error(
              `${err?.response.data.message} - ${err.response.status}`
            );
          }
          throw new Error(err);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <ThemeProvider theme={theme}>
          <Router />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
          />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
