import React, { useCallback, useMemo } from "react";
import styles from "./eventNow.module.scss";
import { Text } from "@app/ui";
import { colors } from "@app/shared";
import { useEventsData } from "@app/modules/events/hooks/useEventsData";
import dayjs from "dayjs";
import { useProfile } from "@app/modules/auth/hooks/useProfile";

export const EventNowCard = () => {
  const { data, handleRegisterEvent, handleUnRegisterEvent } = useEventsData();
  const { data: profile } = useProfile();

  const nowEvent = useMemo(() => {
    if (data) {
      return data.find((event) =>
        dayjs(new Date()).isBetween(
          event.dateStart,
          event.dateEnd,
          "minute",
          "[]"
        )
      );
    }
    return undefined;
  }, [data]);

  const userIsRegistered = useMemo(() => {
    if (nowEvent && profile) {
      return nowEvent.members.find((member) => member._id === profile.data._id);
    }
    return undefined;
  }, [nowEvent, handleUnRegisterEvent]);

  const handleAcceptEvent = useCallback(() => {
    if (nowEvent && profile) {
      if (userIsRegistered) {
        handleUnRegisterEvent.mutate({
          _id: nowEvent._id,
          userId: profile.data._id,
        });
      } else {
        handleRegisterEvent.mutate({
          _id: nowEvent._id,
          userId: profile.data._id,
        });
      }
    }
  }, [nowEvent, profile, userIsRegistered]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.head}>
        <Text size={16}>мероприятие</Text>
        <Text alternative size={14}>
          сейчас
        </Text>
      </span>
      <Text size={28}>
        {nowEvent ? nowEvent.title : "Сейчас ничего нет"}
        <span className={styles.class}>{nowEvent && "В123"}</span>
      </Text>
      {nowEvent && (
        <div>
          <Text alternative size={14}>
            преподаватель
          </Text>
          <Text
            size={16}
          >{`${nowEvent.author.firstName} ${nowEvent.author.lastName}`}</Text>
        </div>
      )}

      <Text alternative size={14}>
        {nowEvent
          ? nowEvent.title
          : "Сейчас свободное время! Вы можете посетить event площадку или заняться своими делами"}
      </Text>
      {nowEvent && (
        <button onClick={handleAcceptEvent} className={styles.eventChecker}>
          <Text className={styles.checkerText} color={colors.four} size={14}>
            {userIsRegistered ? "отменить посещение" : "отметить посещение"}
          </Text>
        </button>
      )}
    </div>
  );
};
