import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import client from "../apollo/client";
import theme from "../styles/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
