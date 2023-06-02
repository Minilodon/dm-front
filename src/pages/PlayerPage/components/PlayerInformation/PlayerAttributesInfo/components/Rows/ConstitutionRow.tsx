import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";

function ConstitutionRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <AttrAndModDisplay
        attributeName="Constituição"
        attributeValue={player?.attributes?.con}
      />
      <SaveDisplay
        attrValue={player?.attributes?.con}
        hasProficiency={player?.attributes?.conSave || false}
      />
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
    </div>
  );
}

export default ConstitutionRow;
