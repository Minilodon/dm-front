import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function ConstitutionRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName="Constituição"
          attributeValue={player?.attributes?.con}
        />
        <SaveDisplay
          attrValue={player?.attributes?.con}
          hasProficiency={player?.attributes?.conSave || false}
        />
      </div>
      <SkillDisplay />
    </div>
  );
}

export default ConstitutionRow;
