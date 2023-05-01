import React from "react";
import styles from "./index.module.scss";
import { ProfileBlock } from "@app/modules/profile";

export const ProfileScreen = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileBlock />
    </div>
  );
};
