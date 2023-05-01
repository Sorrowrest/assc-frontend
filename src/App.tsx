import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.scss";
import { Router } from "./pages/router";
import { theme } from "@app/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initAxiosInstance } from "@core/services/api";
import "react-big-calendar/lib/sass/styles.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});
initAxiosInstance();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
