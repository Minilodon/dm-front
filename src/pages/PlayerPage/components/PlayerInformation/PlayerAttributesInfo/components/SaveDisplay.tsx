import React from "react";
import { getModFromAttributes } from "../../../../../../helpers/get-mod-from-attributes";
import { Tooltip } from "@mui/material";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";
import { getProfBonus } from "../../../../../../helpers/get-prof-bonus";
import {
  AttributesEnum,
  UpdateAttributesInput,
  useUpdatePlayerAttributesMutation,
} from "../../../../../../generated/graphql";
import { getAttributeSaveMutation } from "../../../../../../constants/attributes";

interface SaveDisplayProps {
  attrValue: number | undefined;
  hasProficiency: boolean | undefined;
  attr: AttributesEnum;
}

function SaveDisplay(props: SaveDisplayProps) {
  const { attrValue, hasProficiency, attr } = props;

  const { player } = usePlayerContext();
  const [updatePlayerAttributes, { loading }] =
    useUpdatePlayerAttributesMutation({ refetchQueries: "all" });

  const profMod = getProfBonus(player?.level);
  const mod = hasProficiency
    ? getModFromAttributes(attrValue) + profMod
    : getModFromAttributes(attrValue);
  const modText = mod < 0 ? mod.toString() : "+" + mod.toString();
  const mutationKey = getAttributeSaveMutation(attr);

  const handleToggleSave = async () => {
    if (!player) return;
    const payload: UpdateAttributesInput = {};
    payload[mutationKey] = player.attributes
      ? !player.attributes[mutationKey]
      : false;
    try {
      await updatePlayerAttributes({
        variables: { playerId: player.id, payload },
      });
    } catch (error) {
      console.log("Algo deu errado");
    }
  };
  return (
    <div className="flex flex-col items-center ml-4">
      <span className="font-semibold">Salvaguarda</span>
      <div className="h-[50px] border-2 border-black w-14 flex items-center justify-center font-semibold">
        {modText}
      </div>
      <div
        className="h-[20px] border-b-2 border-l-2 border-r-2 border-black w-14 flex items-center justify-center cursor-pointer"
        onClick={handleToggleSave}
      >
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
