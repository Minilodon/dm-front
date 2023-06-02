import React from "react";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";

function StrengthRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <AttrAndModDisplay
        attributeName="Força"
        attributeValue={player?.attributes?.str}
      />
      <SaveDisplay
        attrValue={player?.attributes?.str}
        hasProficiency={player?.attributes?.strSave || false}
      />
      <SkillDisplay
        attrValue={player?.attributes?.str}
        hasProficiency={player?.skills?.athleticsProf}
        hasExpertise={player?.skills?.athleticsExp}
        skillName="Atletismo"
      />
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
    </div>
  );
}

export default StrengthRow;
