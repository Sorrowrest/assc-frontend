import React from "react";
import { TextField as MUIInput, TextFieldProps } from "@mui/material";
import styles from "./Input.module.scss";
import { styled } from "@mui/material/styles";
import cn from "classnames";
import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";

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

const ProfileInput = styled(MUIInput)({
  "& .MuiInputBase-input": {
    borderRadius: 0,
    padding: "10px 12px",
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  "& .MuiInputBase-disabled": {
    borderRadius: 0,
    border: "none",
    padding: "10px 12px",
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFFFFF",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#FFFFFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFFFFF",
    },
  },
});

const CustomMuiTelInput = styled(MuiTelInput)({
  width: "100%",
  backgroundColor: "white",
  marginTop: 8,
  "& .MuiInputBase-input": {
    borderRadius: 0,
    padding: "10px 12px",
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  "& .MuiInputBase-disabled": {
    borderRadius: 0,
    border: "none",
    padding: "10px 12px",
    color: "#000000",
    marginTop: 8,
    backgroundColor: "#FFFFFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFFFFF",
  },
  "& .MuiOutlinedInput-root": {
    width: "100%",
    "& fieldset": {
      borderColor: "#FFFFFF",
      borderRadius: 0,
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

export const Input: React.FC<CustomTextFieldProps> & {
  Profile: React.FC<CustomTextFieldProps>;
  Phone: React.FC<MuiTelInputProps>;
} = ({ label, color = "secondary", ...props }) => {
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

const ProfileInputBlock: React.FC<CustomTextFieldProps> = ({
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
      <ProfileInput {...props} className={styles.wrapper}></ProfileInput>
    </div>
  );
};

const PhoneInputBlock: React.FC<MuiTelInputProps> = ({ ...props }) => {
  return (
    <CustomMuiTelInput
      {...props}
      forceCallingCode
      onlyCountries={["RU"]}
      disableDropdown
      defaultCountry="RU"
    />
  );
};

Input.Profile = ProfileInputBlock;
Input.Phone = PhoneInputBlock;
