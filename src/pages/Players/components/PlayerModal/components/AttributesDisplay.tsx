import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { getModFromAttributes } from "../../../../../helpers/get-mod-from-attributes";
import AttributeValues from "./AttributeValues";

function AttributesDisplay() {
  const { selectedPlayer } = usePlayerContext();
  return (
    <div className="w-[18vw] h-[30vh] border border-black mr-3 mt-3 p-3 flex flex-col">
      <h1 className="text-lg h-fit self-center border-b border-black">
        Atributos
      </h1>
      <div className="grid grid-flow-row grid-rows-6 h-full">
        <AttributeValues
          attributeValue={selectedPlayer?.attributes?.str}
          attributeName="Força"
        />
        <AttributeValues
          attributeValue={selectedPlayer?.attributes?.dex}
          attributeName="Destreza"
        />
        <AttributeValues
          attributeValue={selectedPlayer?.attributes?.con}
          attributeName="Constituição"
        />
        <AttributeValues
          attributeValue={selectedPlayer?.attributes?.int}
          attributeName="Inteligência"
        />
        <AttributeValues
          attributeValue={selectedPlayer?.attributes?.wis}
          attributeName="Sabedoria"
        />
        <AttributeValues
          attributeValue={selectedPlayer?.attributes?.cha}
          attributeName="Carisma"
        />
      </div>
    </div>
  );
}

export default AttributesDisplay;
