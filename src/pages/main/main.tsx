import * as React from "react";
import styles from "./main.module.css";
import { EventNowCard } from "@app/modules/eventNow";
import { EventsBlock } from "@app/modules/eventsAll";
import { StatisticBlock } from "@app/modules/statistic";

export const MainScreen = () => {
  return (
    <div className={styles.wrapper}>
      <EventNowCard />
      <div className={styles.infoCard}>
        <EventsBlock />
        <StatisticBlock />
      </div>
    </div>
  );
};
