import React from "react";
import { Select as MUISelect, SelectProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomProfileSelect = styled(MUISelect)({
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
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
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

export const Select: React.FC<SelectProps> = ({ ...props }) => {
  return <CustomProfileSelect {...props} />;
};
