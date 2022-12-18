import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./styles/App.scss";

import URL from "./config/url";
import AppRouter from "./AppRouter";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={URL.base()}>
        <ThemeProvider theme={overrideThemes()}>
          <AppRouter></AppRouter>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

function overrideThemes() {
  return createTheme({
    palette: {
      primary: {
        light: "#f75f5f",
        main: "#fb2f2f",
        dark: "#e52b2b",
        contrastText: "white",
      },
      secondary: {
        light: "#acfdfd",
        main: "#2ffbfb",
        dark: "#26bdbd",
        contrastText: "black",
      },
      ash: {
        light: "#e0e0e0",
        main: "#bdbdbd",
        dark: "#9e9e9e",
        contrastText: "white",
      },
      plain: {
        light: "white",
        main: "white",
        dark: "white",
        contrastText: "black",
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          dense: {
            height: 32,
            minHeight: 32,
          },
        },
      },
    },
  });
}

export default App;
