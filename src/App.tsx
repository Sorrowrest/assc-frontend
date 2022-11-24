import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import "./App.css";
import { Router } from "./ui/pages/router";
import axios from "axios";
import { setUserState } from "./core/store/user/actions";
import { useDispatch } from "react-redux";

const theme = createTheme();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const profile = await axios.get("profile");
      console.log(profile.data);
      dispatch(setUserState(profile.data));
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
