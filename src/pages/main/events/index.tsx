import React from "react";
import styles from "./index.module.scss";
import { EventsBlock } from "@app/modules/events";

export const EventsScreen = () => {
  return (
    <div className={styles.wrapper}>
      <EventsBlock />
    </div>
  );
};
