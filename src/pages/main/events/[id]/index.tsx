import React from "react";
import styles from "./index.module.scss";
import { EventBlock } from "@app/modules/event";

export const EventScreen = () => {
  return (
    <div className={styles.wrapper}>
      <EventBlock />
    </div>
  );
};
