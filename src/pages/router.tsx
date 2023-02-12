import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthScreen } from "./auth/auth";
import { MainScreen } from "./main/main";
import { useIsAuth } from "@app/modules/auth/hooks/useIsAuth";

export const Router = () => {
  const { isLoading, isAuth } = useIsAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuth) {
      navigate("/sign");
    }
  }, [isAuth, navigate, isLoading]);

  return (
    <Routes>
      <Route index element={<MainScreen />} />
      <Route path="/sign" element={<AuthScreen />} />
    </Routes>
  );
};
