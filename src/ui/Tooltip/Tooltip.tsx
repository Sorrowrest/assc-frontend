import styles from "./Tooltip.module.scss";
import React from "react";

import { Tooltip as AntdTooltip } from "@mui/material";

type TooltipProps = {
  children: any;
  title: any;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, title }) => {
  return (
    <AntdTooltip title={<div className={styles.wrapper}>{title}</div>}>
      {children}
    </AntdTooltip>
  );
};
