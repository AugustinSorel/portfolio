import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
