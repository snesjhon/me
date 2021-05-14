import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "transparent",
        backgroundImage: "linear-gradient(to left, #141e30, #243b55)",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>snesjhon | Jhon Paredes</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
