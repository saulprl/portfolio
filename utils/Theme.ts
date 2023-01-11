import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    border: {
      default: string;
    };
  }

  interface ThemeOptions {
    border?: {
      default?: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EE588A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#571F4E",
    },
    info: {
      main: "#145C9E",
    },
    success: {
      main: "#469B4B",
    },
    warning: {
      main: "#F18F01",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FE8534",
    },
    background: {
      default: "#DEE4E7",
    },
  },
  border: {
    default: "1px solid #C3C8CB",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E91E63",
    },
    secondary: {
      main: "#3B3681",
    },
    info: {
      main: "#05668D",
    },
    success: {
      main: "#058A3C",
    },
    warning: {
      main: "#E09200",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#CB5201",
    },
    background: {
      default: "#282c34",
    },
  },
  border: {
    default: "1px solid #282C34",
  },
});
