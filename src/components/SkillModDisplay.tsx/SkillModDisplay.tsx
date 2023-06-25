import React from "react";
import { usePlayerContext } from "../../pages/Players/contexts/PlayerContext";
import { getProfBonus } from "../../helpers/get-prof-bonus";
import { getModFromAttributes } from "../../helpers/get-mod-from-attributes";

interface SkillModDisplayProps {
  attributeValue: number;
  hasProficiency: boolean;
  hasExpertise: boolean;
}

function SkillModDisplay(props: SkillModDisplayProps) {
  const { attributeValue, hasExpertise, hasProficiency } = props;
  const { player } = usePlayerContext();

  const profBonus = getProfBonus(player?.level);
  const attributeBonus = getModFromAttributes(attributeValue);
  const totalBonus = hasProficiency
    ? hasExpertise
      ? profBonus * 2 + attributeBonus
      : profBonus + attributeBonus
    : attributeBonus;
  const totalBonusText =
    totalBonus >= 0 ? `+${totalBonus}` : totalBonus.toString();
  return (
    <div className="w-6 h-6 border-2 border-black flex items-center justify-center">
      <span className="text-xs">{totalBonusText}</span>
    </div>
  );
}

export default SkillModDisplay;
