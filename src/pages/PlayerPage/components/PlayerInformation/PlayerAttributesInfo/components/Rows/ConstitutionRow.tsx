import React from "react";
import { usePlayerContext } from "../../../../../../Players/contexts/PlayerContext";
import AttrAndModDisplay from "../../../../../../../components/AttrAndModDisplay/AttrAndModDisplay";
import SaveDisplay from "../SaveDisplay";
import SkillDisplay from "../SkillDisplay";
import { AttributesEnum } from "../../../../../../../generated/graphql";

function ConstitutionRow() {
  const { player } = usePlayerContext();
  return (
    <div className="flex-1 flex items-center w-full">
      <div className="w-fit flex">
        <AttrAndModDisplay
          attributeName={AttributesEnum.Constitution}
          attributeValue={player?.attributes?.con}
          player={player}
        />
        <SaveDisplay
          attrValue={player?.attributes?.con}
          hasProficiency={player?.attributes?.conSave || false}
          attr={AttributesEnum.Constitution}
        />
      </div>
      <SkillDisplay />
    </div>
  );
}

export default ConstitutionRow;
