import React from "react";
import styles from "./eventsBlock.module.scss";
import { EventItem } from "../eventItem/eventItem";
import dayjs from "dayjs";
import { TEvent } from "../../events.type";

type Props = {
  itemClassName?: string;
  tableEvents?: TEvent[];
};

export const EventsMain: React.FC<Props> = ({ itemClassName, tableEvents }) => {
  return (
    <div className={styles.headStyle}>
      <div className={styles.wrapper}>
        {tableEvents &&
          tableEvents
            .splice(0, 3)
            .map((event) => (
              <EventItem
                className={itemClassName}
                key={event._id}
                id={event._id}
                firstTime={dayjs(event.dateStart).format("DD.MM HH:MM")}
                secondTime={dayjs(event.dateEnd).format("DD.MM HH:MM")}
                audience={"b23"}
                name={event.title}
              />
            ))}
      </div>
    </div>
  );
};
