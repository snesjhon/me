import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

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
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
