import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";

function CharismaRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName={AttributesEnum.Charisma}
          attributeValue={player?.attributes?.cha}
          player={player}
        />
        <SaveDisplay
          attrValue={player?.attributes?.cha}
          hasProficiency={player?.attributes?.chaSave || false}
          attr={AttributesEnum.Charisma}
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
