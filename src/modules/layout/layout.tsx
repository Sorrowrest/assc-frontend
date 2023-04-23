import React from "react";
import styles from "./layout.module.scss";
import { Header } from "@app/modules/header";
import { AsideMenu } from "@app/modules/aside/aside";
import { Outlet, useLocation } from "react-router-dom";
import cn from "classnames";

export const LayoutComponent = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWithMenu}>
        {location.pathname !== "/profile" && <AsideMenu />}

        <div
          className={cn(styles.content, {
            [styles.disablePadding]: location.pathname === "/talons",
            [styles.fullWidth]: location.pathname === "/profile",
          })}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
