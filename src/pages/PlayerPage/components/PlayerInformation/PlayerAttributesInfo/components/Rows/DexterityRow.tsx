import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";

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
            name: "Acrobacia",
          },
          {
            attributeValue: player?.attributes?.dex,
            hasExpertise: player?.skills?.stealthExp,
            hasProficiency: player?.skills?.stealthProf,
            name: "Furtividade",
          },
          {
            attributeValue: player?.attributes?.dex,
            hasExpertise: player?.skills?.sleightOfHandExp,
            hasProficiency: player?.skills?.sleightOfHandProf,
            name: "Prestidigitação",
          },
        ]}
      />
    </div>
  );
}

export default DexterityRow;
