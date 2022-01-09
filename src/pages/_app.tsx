import React from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/themes/light";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
