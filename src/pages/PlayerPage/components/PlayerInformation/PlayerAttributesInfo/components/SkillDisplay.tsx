import React from "react";
import { getModFromAttributes } from "../../../../../../helpers/get-mod-from-attributes";
import { Tooltip } from "@mui/material";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";
import { getProfBonus } from "../../../../../../helpers/get-prof-bonus";
import { splitArray } from "../../../../../../helpers/split-array";
import DoubleCheckbox from "../../../../../../components/DoubleCheckbox/DoubleCheckbox";
import SkillModDisplay from "../../../../../../components/SkillModDisplay.tsx/SkillModDisplay";
export interface Skill {
  name: string | undefined;
  attributeValue: number | undefined;
  hasProficiency: boolean | undefined;
  hasExpertise: boolean | undefined;
}

interface SkillDisplayProps {
  skills?: Skill[];
}

function SkillDisplay(props: SkillDisplayProps) {
  const { skills } = props;

  const groupedArrays = skills ? splitArray(skills, 3) : null;

  return (
    <div className="w-full h-full border-l border-l-black ml-4 flex mt-4 border-b">
      <div className="flex-1 flex flex-col h-full ml-8">
        {groupedArrays &&
          groupedArrays[0].map((skill, index) => (
            <div className="flex items-center flex-1 gap-x-2" key={index}>
              <DoubleCheckbox
                biggerBoolean={skill.hasProficiency || false}
                smallerBoolean={skill.hasExpertise || false}
              />
              <SkillModDisplay
                attributeValue={skill.attributeValue || 10}
                hasExpertise={skill.hasExpertise || false}
                hasProficiency={skill.hasProficiency || false}
              />
              <span>{skill.name}</span>
            </div>
          ))}
      </div>
      <div className="flex-1 flex flex-col h-full ml-2">
        {groupedArrays &&
          groupedArrays.length > 1 &&
          groupedArrays[1].map((skill, index) => (
            <div className="flex items-center flex-1 gap-x-2" key={index}>
              <DoubleCheckbox
                biggerBoolean={skill.hasProficiency || false}
                smallerBoolean={skill.hasExpertise || false}
              />
              <SkillModDisplay
                attributeValue={skill.attributeValue || 10}
                hasExpertise={skill.hasExpertise || false}
                hasProficiency={skill.hasProficiency || false}
              />
              <span>{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SkillDisplay;
