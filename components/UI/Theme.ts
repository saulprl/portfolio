import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EE588A",
    },
    secondary: {
      main: "#7DA1A0",
    },
    success: {
      main: "#93DD2C",
    },
    warning: {
      main: "#FFD685",
    },
    error: {
      main: "#FE8534",
    },
    background: {
      default: "#DEE4E7",
    },
  }
}, { border: { default: "1px solid #C3C8CB" } });

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#BA124A",
    },
    secondary: {
      main: "#455F5E",
    },
    success: {
      main: "#507B14",
    },
    warning: {
      main: "#FFAD0A",
    },
    error: {
      main: "#CB5201",
    },
    background: {
      default: "#282c34",
    },
  },
}, { border: { default: "1px solid #282C34" } });