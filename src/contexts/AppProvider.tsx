import React from "react";
import DrawerContextProvider from "./DrawerContext";
import { ToastContextProvider } from "./ToastContext";
import ModalContextProvider from "./ModalContext";

function AppProvider(props: React.PropsWithChildren<{}>) {
  const { children } = props;

  return (
    <ToastContextProvider>
      <DrawerContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </DrawerContextProvider>
    </ToastContextProvider>
  );
}

export default AppProvider;
