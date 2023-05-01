import * as React from "react";
import styles from "./index.module.scss";
import { EventNowCard, EventsMain } from "@app/modules/events";
import { StatisticBlock } from "@app/modules/statistic";
import { Text } from "@app/ui";
import { colors } from "@app/shared";

export const MainScreen = () => {
  return (
    <div className={styles.wrapper}>
      <EventNowCard />
      <div className={styles.infoCard}>
        <div>
          <EventsMain />
          <button className={styles.nextEvent}>
            <Text
              className={styles.textNext}
              size={16}
              color={colors.secondary}
            >
              следующие мероприятия
            </Text>
          </button>
        </div>

        <StatisticBlock />
      </div>
    </div>
  );
};
