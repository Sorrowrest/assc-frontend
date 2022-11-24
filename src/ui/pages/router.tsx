import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { initAxiosInstance } from "../../core/services/api";
import { AuthScreen } from "./auth";
import { MainScreen } from "./main";

export const Router = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthorized = initAxiosInstance();

    if (!isAuthorized) {
      navigate("/sign");
    }
  }, []);

  return (
    <Routes>
      <Route index element={<MainScreen />} />
      <Route path="/sign" element={<AuthScreen />} />
    </Routes>
  );
};
