import styles from "./events.module.scss";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ru";

const localizer = momentLocalizer(moment);

export const EventsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div></div>
      <div className={styles.calendar}>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};
