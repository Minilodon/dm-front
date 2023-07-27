import React from "react";
import DrawerContextProvider from "./DrawerContext";
import { ToastContextProvider } from "./ToastContext";
import ModalContextProvider from "./ModalContext";
import PlayerContextProvider from "../pages/Players/contexts/PlayerContext";
import EquipmentsContextProvider from "../pages/ItemsPage/contexts/EquipmentContext";
import ArmorContextProvider from "../pages/ItemsPage/contexts/ArmorContext";
import WeaponsContextProvider from "../pages/ItemsPage/contexts/WeaponsContext";

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
