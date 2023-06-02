import React from "react";
import { getModFromAttributes } from "../../../../../../helpers/get-mod-from-attributes";
import { Tooltip } from "@mui/material";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";
import { getProfBonus } from "../../../../../../helpers/get-prof-bonus";

interface SaveDisplayProps {
  attrValue: number | undefined;
  hasProficiency: boolean | undefined;
}

function SaveDisplay(props: SaveDisplayProps) {
  const { attrValue, hasProficiency } = props;
  const { player } = usePlayerContext();
  const profMod = getProfBonus(player?.level);
  const mod = hasProficiency
    ? getModFromAttributes(attrValue) + profMod
    : getModFromAttributes(attrValue);
  const modText = mod < 0 ? mod.toString() : "+" + mod.toString();
  return (
    <div className="flex flex-col items-center ml-4 w-1/7">
      <span className="font-semibold">Salvaguarda</span>
      <div className="h-[50px] border-2 border-black w-14 flex items-center justify-center font-semibold">
        {modText}
      </div>
      <div className="h-[20px] border-b-2 border-l-2 border-r-2 border-black w-14 flex items-center justify-center cursor-pointer">
        {hasProficiency && (
          <Tooltip title={"Proficiência"}>
            <span className="font-semibold">P</span>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default SaveDisplay;
