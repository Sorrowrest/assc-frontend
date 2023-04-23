import React from "react";
import styles from "./index.module.scss";
import { TalonsBlock } from "@app/modules/talons";

export const TalonsScreen = () => {
  return (
    <div className={styles.wrapper}>
      <TalonsBlock />
    </div>
  );
};
