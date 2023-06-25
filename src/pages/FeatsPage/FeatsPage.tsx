import React from "react";
import FeatsContextProvider from "./contexts/FeatsContext";
import { Outlet } from "react-router-dom";

function FeatsPage() {
  return (
    <FeatsContextProvider>
      <Outlet />
    </FeatsContextProvider>
  );
}

export default FeatsPage;
