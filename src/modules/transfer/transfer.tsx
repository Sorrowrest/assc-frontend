import * as React from "react";
import styles from "./transfer.module.scss";
import { TransferInfo } from "./components/transferInfo/transferInfo";
import { AboutComing } from "./components/aboutComing/aboutComing";

export const TransferBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      <TransferInfo />
      <AboutComing />
    </div>
  );
};
