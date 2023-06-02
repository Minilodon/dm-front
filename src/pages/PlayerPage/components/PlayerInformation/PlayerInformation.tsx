import React from "react";
import PlayerGeneralInfo from "./PlayerGeneralInfo/PlayerGeneralInfo";
import PlayerAttributesInfo from "./PlayerAttributesInfo/PlayerAttributesInfo";

function PlayerInformation() {
  return (
    <div className="flex items-center w-full h-full shadow">
      <PlayerGeneralInfo />
      <PlayerAttributesInfo />
    </div>
  );
}

export default PlayerInformation;
