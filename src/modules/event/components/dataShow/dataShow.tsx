import React from "react";
import { Text } from "@app/ui";
import style from "./dataShow.module.scss";

export type DataShowProps = {
  name: string;
  value: string;
};

export const DataShow: React.FC<DataShowProps> = ({ name, value }) => {
  return (
    <div className={style.wrapper}>
      <Text size={12}>--- {name}</Text>
      <Text size={28} font="Jost">
        &nbsp;&nbsp;&nbsp;{value}
      </Text>
    </div>
  );
};
