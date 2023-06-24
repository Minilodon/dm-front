import React from "react";
import DrawerContextProvider from "./DrawerContext";
import PlayerContextProvider from "./PlayerContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContextProvider } from "./ToastContext";
import ModalContextProvider from "./ModalContext";
import FeatsContextProvider from "./FeatsContext";
import WeaponsContextProvider from "./WeaponsContext";
import ArmorContextProvider from "./ArmorContext";
import EquipmentsContextProvider from "./EquipmentContext";
import SpellContextProvider from "./SpellContext";
import { createUploadLink } from "apollo-upload-client";

const httpLink = createUploadLink({
  uri: "http://localhost:8080/graphql",
});

function AppProvider(props: React.PropsWithChildren<{}>) {
  const { children } = props;
  const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
    link: httpLink,
  });
  return (
    <div>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ToastContextProvider>
            <PlayerContextProvider>
              <FeatsContextProvider>
                <WeaponsContextProvider>
                  <ArmorContextProvider>
                    <EquipmentsContextProvider>
                      <SpellContextProvider>
                        <DrawerContextProvider>
                          <ModalContextProvider>
                            {children}
                          </ModalContextProvider>
                        </DrawerContextProvider>
                      </SpellContextProvider>
                    </EquipmentsContextProvider>
                  </ArmorContextProvider>
                </WeaponsContextProvider>
              </FeatsContextProvider>
            </PlayerContextProvider>
          </ToastContextProvider>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default AppProvider;
