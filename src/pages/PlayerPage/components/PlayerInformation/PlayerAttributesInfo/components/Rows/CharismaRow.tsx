import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function CharismaRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName="Carisma"
          attributeValue={player?.attributes?.cha}
        />
        <SaveDisplay
          attrValue={player?.attributes?.cha}
          hasProficiency={player?.attributes?.chaSave || false}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.performanceProf,
            hasExpertise: player?.skills?.performanceExp,
            name: "Atuação",
          },
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.deceptionProf,
            hasExpertise: player?.skills?.deceptionExp,
            name: "Enganação",
          },
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.intimidationProf,
            hasExpertise: player?.skills?.intimidationExp,
            name: "Intimidação",
          },
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.persuasionProf,
            hasExpertise: player?.skills?.persuasionExp,
            name: "Persuasão",
          },
        ]}
      />
    </div>
  );
}

export default CharismaRow;
