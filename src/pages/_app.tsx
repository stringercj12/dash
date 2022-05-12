import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { AppThemeProvider } from "../contexts/ThemeContext";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
