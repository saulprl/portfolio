import { useState } from "react";

import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme, lightTheme } from "../components/UI/Theme";

import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setThemeMode((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Layout onToggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
