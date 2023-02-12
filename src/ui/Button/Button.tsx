import React from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <MUIButton {...props} className={cn(styles.wrapper, className)}></MUIButton>
  );
};
