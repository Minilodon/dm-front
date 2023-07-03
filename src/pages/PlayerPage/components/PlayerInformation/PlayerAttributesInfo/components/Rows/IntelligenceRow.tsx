import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";
import { SkillsEnum } from "../../../../../../../constants/skills";

function IntelligenceRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName={AttributesEnum.Intelligence}
          attributeValue={player?.attributes?.int}
          player={player}
        />
        <SaveDisplay
          attrValue={player?.attributes?.int}
          hasProficiency={player?.attributes?.intSave || false}
          attr={AttributesEnum.Intelligence}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.arcanaProf,
            hasExpertise: player?.skills?.arcanaExp,
            type: SkillsEnum.arcana,
            player,
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.historyProf,
            hasExpertise: player?.skills?.historyExp,
            type: SkillsEnum.history,
            player,
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.investigationProf,
            hasExpertise: player?.skills?.investigationExp,
            type: SkillsEnum.investigation,
            player,
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.natureProf,
            hasExpertise: player?.skills?.natureExp,
            type: SkillsEnum.nature,
            player,
          },
          {
            attributeValue: player?.attributes?.int,
            hasProficiency: player?.skills?.religionProf,
            hasExpertise: player?.skills?.religionExp,
            type: SkillsEnum.religion,
            player,
          },
        ]}
      />
    </div>
  );
}

export default IntelligenceRow;
