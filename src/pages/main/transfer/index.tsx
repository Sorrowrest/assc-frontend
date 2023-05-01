import React from "react";
import styles from "./index.module.scss";
import { TransferBlock } from "@app/modules/transfer";

export const TransferScreen = () => {
  return (
    <div className={styles.wrapper}>
      <TransferBlock />
    </div>
  );
};
