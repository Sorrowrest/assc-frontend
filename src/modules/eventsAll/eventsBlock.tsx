import React from "react";
import styles from "./eventsBlock.module.scss";
import { EventItem } from "./components/eventItem/eventItem";
import { Text } from "@app/ui";
import { colors } from "@app/shared";

export const EventsBlock = () => {
  return (
    <div className={styles.headStyle}>
      <div className={styles.wrapper}>
        <EventItem
          name="Лекция"
          firstTime="17:00"
          secondTime="18:00"
          audience="A14"
        />
        <EventItem
          name="Лекция"
          firstTime="17:00"
          secondTime="18:00"
          audience="A14"
        />
        <EventItem
          name="Лекция"
          firstTime="17:00"
          secondTime="18:00"
          audience="A14"
        />
      </div>

      <button className={styles.nextEvent}>
        <Text className={styles.textNext} size={16} color={colors.secondary}>
          следующие мероприятия
        </Text>
      </button>
    </div>
  );
};
