import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function IntelligenceRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <AttrAndModDisplay
        attributeName="Inteligência"
        attributeValue={player?.attributes?.int}
      />
      <SaveDisplay
        attrValue={player?.attributes?.int}
        hasProficiency={player?.attributes?.intSave || false}
      />
      <SkillDisplay
        attrValue={player?.attributes?.int}
        hasProficiency={player?.skills?.arcanaProf}
        hasExpertise={player?.skills?.arcanaExp}
        skillName="Arcanismo"
      />
      <SkillDisplay
        attrValue={player?.attributes?.int}
        hasProficiency={player?.skills?.historyProf}
        hasExpertise={player?.skills?.historyExp}
        skillName="História"
      />
      <SkillDisplay
        attrValue={player?.attributes?.int}
        hasProficiency={player?.skills?.investigationProf}
        hasExpertise={player?.skills?.investigationExp}
        skillName="Investigação"
      />
      <SkillDisplay
        attrValue={player?.attributes?.int}
        hasProficiency={player?.skills?.natureProf}
        hasExpertise={player?.skills?.natureExp}
        skillName="Natureza"
      />
      <SkillDisplay
        attrValue={player?.attributes?.int}
        hasProficiency={player?.skills?.religionProf}
        hasExpertise={player?.skills?.religionExp}
        skillName="Religião"
      />
    </div>
  );
}

export default IntelligenceRow;
