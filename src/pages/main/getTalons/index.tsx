import styles from "@app/pages/main/events/index.module.scss";
import React from "react";
import { GetTalonsBlock } from "@app/modules/getTalons/getTalons";

export const GetTalonsScreen = () => {
  return (
    <div className={styles.wrapper}>
      <GetTalonsBlock />
    </div>
  );
};
