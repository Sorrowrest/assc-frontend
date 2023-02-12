import { createTheme } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string, contrastText?: string) =>
  augmentColor({ color: { main: mainColor, contrastText: contrastText } });

export const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Inter",
      "system-ui",
      "Avenir",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    mode: "light",
    primary: createColor("#5191FA", "#FFFFFF"),
    secondary: createColor("#FFFFFF", "#5191FA"),
    text: {
      primary: "#FFFFFF",
      secondary: "#5191FA",
    },
  },
});
