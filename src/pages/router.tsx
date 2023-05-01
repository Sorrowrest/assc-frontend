import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthScreen } from "./auth";
import { useIsAuth } from "@app/modules/auth/hooks/useIsAuth";
import { useProfileStore } from "@app/modules/auth/";
import { LayoutComponent } from "@app/modules/layout/";
import { MainScreen } from "@app/pages/main";
import { TalonsScreen } from "@app/pages/main/talons";
import { TransferScreen } from "@app/pages/main/transfer";
import { ProfileScreen } from "@app/pages/main/profile";
import { EventsScreen } from "@app/pages/main/events";

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
      <Route path="/sign" element={<AuthScreen />} />
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<MainScreen />} />
        <Route path="/talons" element={<TalonsScreen />} />
        <Route path="/transfer" element={<TransferScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/events" element={<EventsScreen />} />
      </Route>
    </Routes>
  );
};
