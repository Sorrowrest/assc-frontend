import React from "react";
import styles from "./eventNow.module.scss";
import { Text } from "@app/ui";
import { colors } from "@app/shared";

export const EventNowCard = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.head}>
        <Text size={16}>Лекция</Text>
        <Text alternative size={14}>
          сейчас
        </Text>
      </span>
      <Text size={28}>
        Спортивный менеджмент<span className={styles.class}>В123</span>
      </Text>
      <div>
        <Text alternative size={14}>
          преподаватель
        </Text>
        <Text size={16}>Владимир пупкин</Text>
      </div>
      <Text alternative size={14}>
        Описание лекции типа там что-то изучаем крутое Описание лекции типа там
        что-то изучаем крутоеОписание лекции типа там что-то изучаем
        крутоеОписание лекции типа там что-то изучаем крутое изучаем
        крутоеОписание лекции типа там что-то изучаем крутое
      </Text>
      <button className={styles.eventChecker}>
        <Text className={styles.checkerText} color={colors.four} size={14}>
          отметить {"\n"} посещение
        </Text>
      </button>
    </div>
  );
};
