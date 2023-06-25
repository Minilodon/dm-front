import React from "react";
import { Outlet } from "react-router-dom";
import SpellContextProvider from "../../contexts/SpellContext";

function MagicPage() {
  return (
    <SpellContextProvider>
      <Outlet />
    </SpellContextProvider>
  );
}

export default MagicPage;
