import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function CharismaRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <AttrAndModDisplay
        attributeName="Carisma"
        attributeValue={player?.attributes?.cha}
      />
      <SaveDisplay
        attrValue={player?.attributes?.cha}
        hasProficiency={player?.attributes?.chaSave || false}
      />
      <SkillDisplay
        attrValue={player?.attributes?.cha}
        hasProficiency={player?.skills?.performanceProf}
        hasExpertise={player?.skills?.performanceExp}
        skillName="Atuação"
      />
      <SkillDisplay
        attrValue={player?.attributes?.cha}
        hasProficiency={player?.skills?.deceptionProf}
        hasExpertise={player?.skills?.deceptionExp}
        skillName="Enganação"
      />
      <SkillDisplay
        attrValue={player?.attributes?.cha}
        hasProficiency={player?.skills?.intimidationProf}
        hasExpertise={player?.skills?.intimidationExp}
        skillName="Intimidação"
      />
      <SkillDisplay
        attrValue={player?.attributes?.cha}
        hasProficiency={player?.skills?.persuasionProf}
        hasExpertise={player?.skills?.persuasionExp}
        skillName="Persuasão"
      />
      <div className="w-1/7"></div>
    </div>
  );
}

export default CharismaRow;
