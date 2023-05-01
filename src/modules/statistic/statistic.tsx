import React from "react";
import styles from "./statistic.module.scss";
import { Text } from "@app/ui";
import { colors } from "@app/shared";
import { useProfileStore } from "@app/modules/auth";

export const StatisticBlock = () => {
  const { profile } = useProfileStore();

  return (
    <div className={styles.wrapper}>
      <Text className={styles.text} size={20} color={colors.secondary}>
        ССК "Реактор"
      </Text>
      <div className={styles.avatarBlock}>
        <div className={styles.avatar}></div>
        <Text className={styles.text} size={16} color={colors.secondary}>
          {`${profile?.firstName} ${profile?.lastName}`}
        </Text>
      </div>
      <Text className={styles.text} size={16} color={colors.secondary}>
        Спортивный менеджер
      </Text>
    </div>
  );
};
