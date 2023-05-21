import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers";
import React from "react";
import { styled } from "@mui/material/styles";

const CustomDatePicker = styled(DateTimePicker)({
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

export const DatePicker: React.FC<DateTimePickerProps<any>> = (props) => {
  return <CustomDatePicker {...props} />;
};
