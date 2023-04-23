import * as React from "react";
import styles from "./talons.module.scss";
import { EatInfo } from "./components/eatInfo/eatInfo";
import { UserQr } from "@app/modules/userQr/userQr";

export const TalonsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      <EatInfo />
      <UserQr />
    </div>
  );
};
