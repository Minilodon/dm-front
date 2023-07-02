import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";

function WisdomRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName={AttributesEnum.Wisdom}
          attributeValue={player?.attributes?.wis}
          player={player}
        />
        <SaveDisplay
          attrValue={player?.attributes?.wis}
          hasProficiency={player?.attributes?.wisSave || false}
          attr={AttributesEnum.Wisdom}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: player?.attributes?.wis,
            hasProficiency: player?.skills?.insightProf,
            hasExpertise: player?.skills?.insightExp,
            name: "Intuição",
          },
          {
            attributeValue: player?.attributes?.wis,
            hasProficiency: player?.skills?.animalHandlingProf,
            hasExpertise: player?.skills?.animalHandlingExp,
            name: "Lidar com Animais",
          },
          {
            attributeValue: player?.attributes?.wis,
            hasProficiency: player?.skills?.medicineProf,
            hasExpertise: player?.skills?.medicineExp,
            name: "Medicina",
          },
          {
            attributeValue: player?.attributes?.wis,
            hasProficiency: player?.skills?.perceptionProf,
            hasExpertise: player?.skills?.perceptionExp,
            name: "Percepção",
          },
          {
            attributeValue: player?.attributes?.wis,
            hasProficiency: player?.skills?.survivalProf,
            hasExpertise: player?.skills?.survivalExp,
            name: "Sobrevivência",
          },
        ]}
      />
    </div>
  );
}

export default WisdomRow;
