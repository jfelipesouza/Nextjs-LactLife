import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/global";
import { ligthTheme } from "@/styles/themes";
import { HeaderContextProvider } from "@/context/navigation/header";
import { Sidebar } from "../components/Sidebar";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />

        <title>Lactose Online</title>
      </Head>
      <ThemeProvider theme={ligthTheme}>
        <HeaderContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
          <Sidebar />
        </HeaderContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
