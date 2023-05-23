import React from "react";
import { usePlayerContext } from "../../../../../contexts/PlayerContext";
import { getProfBonus } from "../../../../../helpers/get-prof-bonus";

interface SkillProps {
  skillMod: number;
  skillName: string;
  attributeMod: number;
  skillProf: boolean;
  skillExp: boolean;
}

function Skill(props: SkillProps) {
  const { attributeMod, skillMod, skillName, skillExp, skillProf } = props;
  const { selectedPlayer } = usePlayerContext();
  const playerProficiencyMod = getProfBonus(selectedPlayer?.level);
  const proficiencyMod = skillProf
    ? skillExp
      ? 2 * playerProficiencyMod
      : playerProficiencyMod
    : 0;
  const totalMod = skillMod + attributeMod + proficiencyMod;
  return (
    <div>
      {skillName}: {totalMod >= 0 ? `+${totalMod}` : totalMod}
    </div>
  );
}

export default Skill;
