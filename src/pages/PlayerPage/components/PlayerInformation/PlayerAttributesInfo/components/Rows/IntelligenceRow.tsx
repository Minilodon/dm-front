import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function IntelligenceRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName="Inteligência"
          attributeValue={player?.attributes?.int}
        />
        <SaveDisplay
          attrValue={player?.attributes?.int}
          hasProficiency={player?.attributes?.intSave || false}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.arcanaProf,
            hasExpertise: player?.skills?.arcanaExp,
            name: "Arcanismo",
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.historyProf,
            hasExpertise: player?.skills?.historyExp,
            name: "História",
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.investigationProf,
            hasExpertise: player?.skills?.investigationExp,
            name: "Investigação",
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.natureProf,
            hasExpertise: player?.skills?.natureExp,
            name: "Natureza",
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.religionProf,
            hasExpertise: player?.skills?.religionExp,
            name: "Religião",
          },
        ]}
      />
    </div>
  );
}

export default IntelligenceRow;
