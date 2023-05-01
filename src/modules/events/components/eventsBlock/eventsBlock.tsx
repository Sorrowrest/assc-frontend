import React from "react";
import styles from "./eventsBlock.module.scss";
import { EventItem } from "../eventItem/eventItem";

type Props = {
  itemClassName?: string;
};

export const EventsMain: React.FC<Props> = ({ itemClassName }) => {
  return (
    <div className={styles.headStyle}>
      <div className={styles.wrapper}>
        <EventItem
          className={itemClassName}
          name="Лекция"
          firstTime="17:00"
          secondTime="18:00"
          audience="A14"
        />
        <EventItem
          className={itemClassName}
          name="Лекция"
          firstTime="17:00"
          secondTime="18:00"
          audience="A14"
        />
        <EventItem
          className={itemClassName}
          name="Лекция"
          firstTime="17:00"
          secondTime="18:00"
          audience="A14"
        />
      </div>
    </div>
  );
};
