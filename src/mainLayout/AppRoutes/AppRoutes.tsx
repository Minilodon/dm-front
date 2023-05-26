import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PlayersPage from "../../pages/Players/PlayersPage";
import WidgetsPage from "../../pages/WidgetsPage/WidgetsPage";
import ItemsPage from "../../pages/ItemsPage/ItemsPage";
import MagicPage from "../../pages/MagicPage/MagicPage";
import PlayerPage from "../../pages/PlayerPage/PlayerPage";

function AppRoutes() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/widgets" element={<WidgetsPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/magic" element={<MagicPage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="*" element={<>not found</>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
