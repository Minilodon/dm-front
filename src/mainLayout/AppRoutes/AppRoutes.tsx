import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PlayersPage from "../../pages/Players/PlayersPage";

function AppRoutes() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="*" element={<>not found</>} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
