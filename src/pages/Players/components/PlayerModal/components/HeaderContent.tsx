import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { getNameFromClass } from "../../../../../helpers/get-name-from-class";
import { getNameFromRace } from "../../../../../helpers/get-name-from-race";
import { getPtSize } from "../../../../../helpers/get-pt-size";

function HeaderContent() {
  const { selectedPlayer } = usePlayerContext();
  return (
    <div className="w-full mx-3">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-lg">{selectedPlayer?.name}</h1>
          <h1 className="text-lg">Nível: {selectedPlayer?.level}</h1>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base">
            {getNameFromRace(selectedPlayer?.race)}{" "}
            {getPtSize(selectedPlayer?.size)}
          </p>
          <p className="text-base">{getNameFromClass(selectedPlayer?.class)}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
