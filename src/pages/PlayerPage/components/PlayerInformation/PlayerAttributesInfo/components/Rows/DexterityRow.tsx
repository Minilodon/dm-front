import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function DexterityRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName="Destreza"
          attributeValue={player?.attributes?.dex}
        />
        <SaveDisplay
          attrValue={player?.attributes?.dex}
          hasProficiency={player?.attributes?.dexSave || false}
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
