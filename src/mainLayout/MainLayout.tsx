import React from "react";
import TopBar from "./TopBar/TopBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="h-screen pt-[44px]">
      <TopBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
