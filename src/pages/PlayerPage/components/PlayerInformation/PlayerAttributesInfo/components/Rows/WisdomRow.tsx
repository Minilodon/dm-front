import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";

function WisdomRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <AttrAndModDisplay
        attributeName="Sabedoria"
        attributeValue={player?.attributes?.wis}
      />
      <SaveDisplay
        attrValue={player?.attributes?.wis}
        hasProficiency={player?.attributes?.wisSave || false}
      />
      <SkillDisplay
        attrValue={player?.attributes?.wis}
        hasProficiency={player?.skills?.insightProf}
        hasExpertise={player?.skills?.insightExp}
        skillName="Intuição"
      />
      <SkillDisplay
        attrValue={player?.attributes?.wis}
        hasProficiency={player?.skills?.animalHandlingProf}
        hasExpertise={player?.skills?.animalHandlingExp}
        skillName="L. Animais"
      />
      <SkillDisplay
        attrValue={player?.attributes?.wis}
        hasProficiency={player?.skills?.medicineProf}
        hasExpertise={player?.skills?.medicineExp}
        skillName="Medicina"
      />
      <SkillDisplay
        attrValue={player?.attributes?.wis}
        hasProficiency={player?.skills?.perceptionProf}
        hasExpertise={player?.skills?.perceptionExp}
        skillName="Percepção"
      />
      <SkillDisplay
        attrValue={player?.attributes?.wis}
        hasProficiency={player?.skills?.survivalProf}
        hasExpertise={player?.skills?.survivalExp}
        skillName="Sobrevivência"
      />
    </div>
  );
}

export default WisdomRow;
