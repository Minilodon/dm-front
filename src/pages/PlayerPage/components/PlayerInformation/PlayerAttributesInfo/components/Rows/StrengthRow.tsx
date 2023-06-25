import React from "react";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import SkillDisplay from "../SkillDisplay";

function StrengthRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName="Força"
          attributeValue={player?.attributes?.str}
        />
        <SaveDisplay
          attrValue={player?.attributes?.str}
          hasProficiency={player?.attributes?.strSave || false}
        />
      </div>
      <SkillDisplay
        skills={[
          {
            attributeValue: 10,
            hasExpertise: player?.skills?.athleticsExp,
            hasProficiency: player?.skills?.athleticsProf,
            name: "Atletismo",
          },
        ]}
      />
    </div>
  );
}

export default StrengthRow;
