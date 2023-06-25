import React from "react";
import { Outlet } from "react-router-dom";
import ArmorContextProvider from "./contexts/ArmorContext";
import EquipmentsContextProvider from "./contexts/EquipmentContext";
import WeaponsContextProvider from "./contexts/WeaponsContext";

function ItemsPage() {
  return (
    <EquipmentsContextProvider>
      <WeaponsContextProvider>
        <ArmorContextProvider>
          <Outlet />
        </ArmorContextProvider>
      </WeaponsContextProvider>
    </EquipmentsContextProvider>
  );
}

export default ItemsPage;
