import styles from "./events.module.scss";
import React, { useMemo } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "moment/locale/ru";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);

export const EventsBlock = () => {
  const { data: events } = useEventsData();
  const tableEvents = useMemo(() => {
    if (events) {
      return events.map((event) => ({
        ...event,
        start: dayjs(event.dateStart).toDate(),
        end: dayjs(event.dateEnd).toDate(),
      }));
    }
    return [];
  }, [JSON.stringify(events)]);

  return (
    <div className={styles.wrapper}>
      <div></div>
      <div className={styles.calendar}>
        <Calendar
          localizer={localizer}
          events={tableEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};
