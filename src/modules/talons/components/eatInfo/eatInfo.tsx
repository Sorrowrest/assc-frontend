import React, { useMemo } from "react";
import dayjs from "dayjs";

import styles from "./eatInfo.module.scss";
import { EventsMain } from "@app/modules/events";
import { Text } from "@app/ui";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";

export const EatInfo = () => {
  const now = dayjs().format("L");
  const { data: events } = useEventsData();

  const eatEvents = useMemo(() => {
    if (events) {
      return events.filter((event) => event.category === "eat");
    }
  }, [events]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.eventsBlock}>
        <Text className={styles.todayInfo}>сегодня {now}</Text>
        <EventsMain tableEvents={eatEvents} itemClassName={styles.itemBlock} />
      </div>
      <div className={styles.infoBlock}>
        <Text className={styles.todayInfo}>Как получить талоны?</Text>
        <Text font="Jost" size={14}>
          Талоны привязаны к аккаунту и обновляются автоматически ежедневно. На
          день выдается 3 талона, использовать каждый можно только в
          определенное время, рассчитанное на приём пищи. Отсканировать талон
          можно только один раз, после этого он удаляется. Если время приёма
          пищи закончилось, а талон не был использован, он тоже удаляется. Если
          по уважительной причине вы не смогли посетить столовую, и талон
          сгорел, то обратитесь пожалуйста к куратору для решения этой проблемы.
        </Text>
      </div>
    </div>
  );
};
