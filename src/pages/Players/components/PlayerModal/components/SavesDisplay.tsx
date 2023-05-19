import React from "react";
import SaveMod from "./SaveMod";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { getModFromAttributes } from "../../../../../helpers/get-mod-from-attributes";

function SavesDisplay() {
  const { selectedPlayer } = usePlayerContext();
  return (
    <div className="w-1/4 flex-1 h-full p-2 border border-black flex flex-col">
      <h1 className="self-center text-lg h-fit border-b border-black">
        Salvaguardas
      </h1>
      <div className="grid grid-flow-row grid-rows-6 h-full">
        <SaveMod
          saveMod={getModFromAttributes(selectedPlayer?.attributes?.str)}
          hasProficiency={selectedPlayer?.attributes?.strSave || false}
          saveName="Força"
        />
        <SaveMod
          saveMod={getModFromAttributes(selectedPlayer?.attributes?.dex)}
          hasProficiency={selectedPlayer?.attributes?.dexSave || false}
          saveName="Destreza"
        />
        <SaveMod
          saveMod={getModFromAttributes(selectedPlayer?.attributes?.con)}
          hasProficiency={selectedPlayer?.attributes?.conSave || false}
          saveName="Constituição"
        />
        <SaveMod
          saveMod={getModFromAttributes(selectedPlayer?.attributes?.int)}
          hasProficiency={selectedPlayer?.attributes?.intSave || false}
          saveName="Inteligência"
        />
        <SaveMod
          saveMod={getModFromAttributes(selectedPlayer?.attributes?.wis)}
          hasProficiency={selectedPlayer?.attributes?.wisSave || false}
          saveName="Sabedoria"
        />
        <SaveMod
          saveMod={getModFromAttributes(selectedPlayer?.attributes?.cha)}
          hasProficiency={selectedPlayer?.attributes?.chaSave || false}
          saveName="Carisma"
        />
      </div>
    </div>
  );
}

export default SavesDisplay;
