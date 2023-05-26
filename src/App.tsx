import { useState } from "react";
import AppRoutes from "./mainLayout/AppRoutes/AppRoutes";
import Sidebar from "./mainLayout/Sidebar/Sidebar";
import { Box } from "@mui/material";
import TopBar from "./mainLayout/TopBar/TopBar";

function App() {
  return (
    <Box className="w-screen h-screen bg-slate-200 flex">
      <div className="flex flex-col w-full ">
        <TopBar />
        <AppRoutes />
      </div>
    </Box>
  );
}

export default App;
