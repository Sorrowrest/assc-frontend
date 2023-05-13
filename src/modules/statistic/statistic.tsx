import React from "react";
import styles from "./statistic.module.scss";
import { Text } from "@app/ui";
import { colors } from "@app/shared";
import { Link } from "react-router-dom";
import { useProfile } from "@app/modules/auth/hooks/useProfile";

export const StatisticBlock = () => {
  const { data: profile } = useProfile();

  return (
    <Link to="/profile">
      <div className={styles.wrapper}>
        <Text className={styles.text} size={20} color={colors.secondary}>
          ССК "Реактор"
        </Text>
        <div className={styles.avatarBlock}>
          <div
            style={{ backgroundImage: `url(${profile?.data.avatar})` }}
            className={styles.avatar}
          ></div>
          <Text className={styles.text} size={16} color={colors.secondary}>
            {`${profile?.data.firstName} ${profile?.data.lastName}`}
          </Text>
        </div>
        <Text className={styles.text} size={16} color={colors.secondary}>
          Спортивный менеджер
        </Text>
      </div>
    </Link>
  );
};
