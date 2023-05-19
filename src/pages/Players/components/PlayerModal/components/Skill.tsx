import React from "react";

interface SkillProps {
  skillMod: number;
  skillName: string;
  attributeMod: number;
}

function Skill(props: SkillProps) {
  const { attributeMod, skillMod, skillName } = props;
  const totalMod = skillMod + attributeMod;
  return (
    <div>
      {skillName}: {totalMod >= 0 ? `+${totalMod}` : totalMod}
    </div>
  );
}

export default Skill;
