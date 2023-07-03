import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";
import { SkillsEnum } from "../../../../../../../constants/skills";

function DexterityRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName={AttributesEnum.Dexterity}
          attributeValue={player?.attributes?.dex}
          player={player}
        />
        <SaveDisplay
          attrValue={player?.attributes?.dex}
          hasProficiency={player?.attributes?.dexSave || false}
          attr={AttributesEnum.Dexterity}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: player?.attributes?.dex,
            hasExpertise: player?.skills?.acrobaticsExp,
            hasProficiency: player?.skills?.acrobaticsProf,
            type: SkillsEnum.acrobatics,
            player,
          },
          {
            attributeValue: player?.attributes?.dex,
            hasExpertise: player?.skills?.stealthExp,
            hasProficiency: player?.skills?.stealthProf,
            type: SkillsEnum.stealth,
            player,
          },
          {
            attributeValue: player?.attributes?.dex,
            hasExpertise: player?.skills?.sleightOfHandExp,
            hasProficiency: player?.skills?.sleightOfHandProf,
            type: SkillsEnum.sleightOfHand,
            player,
          },
        ]}
      />
    </div>
  );
}

export default DexterityRow;
