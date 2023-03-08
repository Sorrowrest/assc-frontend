import React from "react";
import styles from "./statistic.module.scss";
import { Text } from "@app/ui";
import { colors } from "@app/shared";

export const StatisticBlock = () => {
  return (
    <div className={styles.wrapper}>
      <Text className={styles.text} size={20} color={colors.secondary}>
        ССК "Реактор"
      </Text>
      <div className={styles.avatarBlock}>
        <div className={styles.avatar}></div>
        <Text className={styles.text} size={16} color={colors.secondary}>
          ССК "Реактор"
        </Text>
      </div>
      <Text className={styles.text} size={16} color={colors.secondary}>
        Спортивный менеджер
      </Text>
    </div>
  );
};
