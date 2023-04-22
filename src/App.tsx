import React from "react";
import AppRoutes from "./mainLayout/AppRoutes/AppRoutes";
import Sidebar from "./mainLayout/Sidebar/Sidebar";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-200 flex ">
      <Sidebar />
      <AppRoutes />
    </div>
  );
}

export default App;
