import React from "react";
import styles from "./eventsBlock.module.scss";
import { EventItem } from "../eventItem/eventItem";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";
import dayjs from "dayjs";

type Props = {
  itemClassName?: string;
};

export const EventsMain: React.FC<Props> = ({ itemClassName }) => {
  const { data: events } = useEventsData();
  const tableEvents =
    events &&
    events.map((event) => ({
      ...event,
      start: dayjs(event.dateStart).toDate(),
      end: dayjs(event.dateEnd).toDate(),
    }));

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
