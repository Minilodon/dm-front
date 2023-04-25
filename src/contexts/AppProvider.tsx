import React from "react";
import DrawerContextProvider from "./DrawerContext";
import PlayerContextProvider from "./PlayerContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContextProvider } from "./ToastContext";
import ModalContextProvider from "./ModalContext";

function AppProvider(props: React.PropsWithChildren<{}>) {
  const { children } = props;
  const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ToastContextProvider>
            <PlayerContextProvider>
              <DrawerContextProvider>
                <ModalContextProvider>{children}</ModalContextProvider>
              </DrawerContextProvider>
            </PlayerContextProvider>
          </ToastContextProvider>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default AppProvider;
