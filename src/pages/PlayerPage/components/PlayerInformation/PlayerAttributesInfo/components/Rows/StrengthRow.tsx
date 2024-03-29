import React from "react";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";
import { SkillsEnum } from "../../../../../../../constants/skills";

function StrengthRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName={AttributesEnum.Strength}
          attributeValue={player?.attributes?.str}
          player={player}
        />
        <SaveDisplay
          attrValue={player?.attributes?.str}
          hasProficiency={player?.attributes?.strSave || false}
          attr={AttributesEnum.Strength}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: 10,
            hasExpertise: player?.skills?.athleticsExp,
            hasProficiency: player?.skills?.athleticsProf,
            type: SkillsEnum.athletics,
            player,
          },
        ]}
      />
    </div>
  );
}

export default StrengthRow;
