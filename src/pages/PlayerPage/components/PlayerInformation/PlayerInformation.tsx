import React from "react";
import PlayerGeneralInfo from "./PlayerGeneralInfo/PlayerGeneralInfo";

function PlayerInformation() {
  return (
    <div className="flex items-center w-full h-full shadow">
      <PlayerGeneralInfo />
      <div className="flex-1 bg-blue-50 w-full h-full"></div>
    </div>
  );
}

export default PlayerInformation;
