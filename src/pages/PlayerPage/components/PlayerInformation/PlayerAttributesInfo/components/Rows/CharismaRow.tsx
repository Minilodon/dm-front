import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";
import { SkillsEnum } from "../../../../../../../constants/skills";

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
            type: SkillsEnum.performance,
            player,
          },
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.deceptionProf,
            hasExpertise: player?.skills?.deceptionExp,
            type: SkillsEnum.deception,
            player,
          },
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.intimidationProf,
            hasExpertise: player?.skills?.intimidationExp,
            type: SkillsEnum.intimidation,
            player,
          },
          {
            attributeValue: player?.attributes?.cha,
            hasProficiency: player?.skills?.persuasionProf,
            hasExpertise: player?.skills?.persuasionExp,
            type: SkillsEnum.persuasion,
            player,
          },
        ]}
      />
    </div>
  );
}

export default CharismaRow;
