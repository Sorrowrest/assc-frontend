import React from "react";
import { TextField as MUIInput, TextFieldProps } from "@mui/material";
import styles from "./Input.module.scss";
import { styled } from "@mui/material/styles";
import cn from "classnames";

const CustomInput = styled(MUIInput)({
  "& .MuiInputBase-input": {
    borderRadius: 12,
    padding: "10px 12px",
    color: "#FFFFFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF",
      borderRadius: 12,
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFFFFF",
    },
  },
});

type CustomTextFieldProps = Omit<TextFieldProps, "color"> & {
  color: "primary" | "secondary";
};

export const Input: React.FC<CustomTextFieldProps> = ({
  label,
  color = "secondary",
  ...props
}) => {
  const labelColor: Record<CustomTextFieldProps["color"], string> = {
    secondary: styles.label__secondary,
    primary: styles.label__primary,
  };

  return (
    <div className={styles.wrapper}>
      <label className={cn(styles.label, labelColor[color])}>{label}</label>
      <CustomInput {...props} className={styles.wrapper}></CustomInput>
    </div>
  );
};
