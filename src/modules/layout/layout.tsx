import React from "react";
import styles from "./layout.module.scss";
import { Header } from "@app/modules/header";
import { AsideMenu } from "@app/modules/aside/aside";
import { Outlet } from "react-router-dom";

export const LayoutComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.contentWithMenu}>
        <AsideMenu />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
