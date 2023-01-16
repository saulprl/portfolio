import { useState } from "react";

import type { AppProps } from "next/app";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import Layout from "../components/Layout/Layout";

import FiltersContext from "../context/FiltersContext";

import { darkTheme, lightTheme } from "../utils/Theme";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setThemeMode((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        <FiltersContext>
          <CssBaseline enableColorScheme />
          <Layout onToggleTheme={toggleTheme} />
          <Component {...pageProps} />
        </FiltersContext>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
