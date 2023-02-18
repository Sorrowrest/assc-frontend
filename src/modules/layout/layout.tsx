import React from "react";
import styles from "./layout.module.scss";
import { Header } from "@app/modules/header";
import { AsideMenu } from "@app/modules/aside/aside";

export const LayoutComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.contentWithMenu}>
        <AsideMenu />
        <div></div>
      </div>
    </div>
  );
};
