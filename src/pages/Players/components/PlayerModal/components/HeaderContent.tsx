import React from "react";
import { usePlayerContext } from "../../../contexts/PlayerContext";
import { getNameFromClass } from "../../../../../helpers/get-name-from-class";
import { getNameFromRace } from "../../../../../helpers/get-name-from-race";
import { getPtSize } from "../../../../../helpers/get-pt-size";
import { getMovementInFt } from "../../../../../helpers/get-movement-in-ft";

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
        <div className="flex items-center justify-between">
          <div>
            Pontos de vida: {selectedPlayer?.currentHitPoints}/
            {selectedPlayer?.hitPoints}
          </div>
          <div>Classe de Armadura: {selectedPlayer?.armorClass}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            Pontos de vida temporários:{" "}
            {selectedPlayer?.currentTemporaryHitPoints}/
            {selectedPlayer?.temporaryHitPoints}
          </div>
          <div>
            Deslocamento: {selectedPlayer?.movement} m/ {""}
            {getMovementInFt(selectedPlayer?.movement)} ft.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
