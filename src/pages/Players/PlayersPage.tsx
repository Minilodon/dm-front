import React from "react";
import { Outlet } from "react-router-dom";
import PlayerContextProvider from "./contexts/PlayerContext";

function PlayersPage() {
  return (
    <PlayerContextProvider>
      <Outlet />
    </PlayerContextProvider>
  );
}

export default PlayersPage;
