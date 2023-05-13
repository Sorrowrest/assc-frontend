import * as React from "react";
import styles from "./index.module.scss";
import { EventNowCard, EventsMain } from "@app/modules/events";
import { StatisticBlock } from "@app/modules/statistic";
import { Text } from "@app/ui";
import { colors } from "@app/shared";
import { Link } from "react-router-dom";

export const MainScreen = () => {
  return (
    <div className={styles.wrapper}>
      <EventNowCard />
      <div className={styles.infoCard}>
        <div>
          <EventsMain />
          <Link to="/events">
            <button className={styles.nextEvent}>
              <Text
                className={styles.textNext}
                size={16}
                color={colors.secondary}
              >
                следующие мероприятия
              </Text>
            </button>
          </Link>
        </div>

        <StatisticBlock />
      </div>
    </div>
  );
};
