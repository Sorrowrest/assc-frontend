import React from "react";
import styles from "./eventItem.module.scss";
import { Icons } from "@app/assets";
import { Text } from "@app/ui";
import { colors } from "@app/shared";

type EventItemProps = {
  firstTime: string;
  secondTime: string;
  audience: string;
  name: string;
};

export const EventItem: React.FC<EventItemProps> = ({
  firstTime,
  secondTime,
  name,
  audience,
}) => {
  return (
    <button className={styles.wrapper}>
      <Icons.ItemVector />
      <div>
        <Text alternative size={14} color={colors.gray}>
          {firstTime} - {secondTime} {audience}
        </Text>
        <Text size={16}>{name}</Text>
      </div>
    </button>
  );
};
