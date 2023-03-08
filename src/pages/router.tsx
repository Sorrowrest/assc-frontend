import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthScreen } from "./auth/auth";
import { useIsAuth } from "@app/modules/auth/hooks/useIsAuth";
import { useProfileStore } from "@app/modules/auth/";
import { LayoutComponent } from "@app/modules/layout/";
import { MainScreen } from "@app/pages/main/main";

export const Router = () => {
  const { isLoading, data } = useIsAuth();
  const navigate = useNavigate();
  const { removeAll } = useProfileStore();

  useEffect(() => {
    if (!isLoading && !data) {
      removeAll();
      navigate("/sign");
    }
  }, [data, navigate, isLoading, removeAll]);

  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="/" element={<MainScreen />}></Route>
      </Route>
      <Route path="/sign" element={<AuthScreen />} />
    </Routes>
  );
};
