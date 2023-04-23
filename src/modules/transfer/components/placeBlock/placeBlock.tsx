import React from "react";
import styles from "./placeBlock.module.scss";
import { Text, Tooltip } from "@app/ui";
import { colors } from "@app/shared";

type PlaceBlock = {
  title: string;
  info: {
    name: string;
    aboutBus: string;
    contactWithDriver: string;
    time: string;
  }[];
};

const TooltipPlace: React.FC<PlaceBlock["info"][0]> = ({
  aboutBus,
  contactWithDriver,
  name,
}) => {
  console.log(name);
  return (
    <div className={styles.blockTooltip}>
      <Text color={colors.four}>{name}</Text>
      <Text color={colors.four}>{aboutBus}</Text>
      <Text.Link
        font="Jost"
        external
        color={colors.four}
        to={contactWithDriver}
      >
        связаться с водителем
      </Text.Link>
    </div>
  );
};

export const PlaceBlock: React.FC<PlaceBlock> = ({ title, info }) => {
  return (
    <div className={styles.wrapper}>
      <Text color={colors.secondary}>{title}</Text>
      <div className={styles.blocksWrapper}>
        {info.map((drive) => (
          <Tooltip title={<TooltipPlace {...drive} />}>
            <div className={styles.block}>
              <Text>{drive.time}</Text>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
