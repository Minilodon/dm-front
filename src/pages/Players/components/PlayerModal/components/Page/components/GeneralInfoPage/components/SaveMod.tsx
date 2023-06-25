import React from "react";
import { usePlayerContext } from "../../../../../../../contexts/PlayerContext";
import { getProfBonus } from "../../../../../../../../../helpers/get-prof-bonus";

interface SaveModProps {
  saveName: string;
  saveMod: number;
  hasProficiency: boolean;
}
function SaveMod(props: SaveModProps) {
  const { saveMod, saveName, hasProficiency } = props;
  const { selectedPlayer } = usePlayerContext();
  const proficiencyBonus = getProfBonus(selectedPlayer?.level);
  return (
    <div className="flex justify-between items-center">
      {saveName}: {hasProficiency ? saveMod + proficiencyBonus : saveMod}
    </div>
  );
}

export default SaveMod;
