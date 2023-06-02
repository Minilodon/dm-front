import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function DexterityRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <AttrAndModDisplay
        attributeName="Destreza"
        attributeValue={player?.attributes?.dex}
      />
      <SaveDisplay
        attrValue={player?.attributes?.dex}
        hasProficiency={player?.attributes?.dexSave || false}
      />
      <SkillDisplay
        attrValue={player?.attributes?.dex}
        hasProficiency={player?.skills?.acrobaticsProf}
        hasExpertise={player?.skills?.acrobaticsExp}
        skillName="Acrobacia"
      />
      <SkillDisplay
        attrValue={player?.attributes?.dex}
        hasProficiency={player?.skills?.stealthProf}
        hasExpertise={player?.skills?.stealthExp}
        skillName="Furtividade"
      />
      <SkillDisplay
        attrValue={player?.attributes?.dex}
        hasProficiency={player?.skills?.sleightOfHandProf}
        hasExpertise={player?.skills?.sleightOfHandExp}
        skillName="Prestidigitação"
      />
      <div className="w-1/7"></div>
      <div className="w-1/7"></div>
    </div>
  );
}

export default DexterityRow;
