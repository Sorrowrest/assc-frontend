import React from "react";
import styles from "./eventItem.module.scss";
import { Icons } from "@app/assets";
import { Text } from "@app/ui";
import { colors } from "@app/shared";
import cn from "classnames";
import { Link } from "react-router-dom";

type EventItemProps = {
  firstTime: string;
  secondTime: string;
  id: string;
  name: string;
  className?: string;
};

export const EventItem: React.FC<EventItemProps> = ({
  firstTime,
  id,
  secondTime,
  name,
  className,
}) => {
  return (
    <Link to={`/events/${id}`}>
      <button className={cn(styles.wrapper, className)}>
        <Icons.ItemVector />
        <div>
          <Text alternative size={14} color={colors.gray}>
            {firstTime} - {secondTime}
          </Text>
          <Text size={16}>{name}</Text>
        </div>
      </button>
    </Link>
  );
};
