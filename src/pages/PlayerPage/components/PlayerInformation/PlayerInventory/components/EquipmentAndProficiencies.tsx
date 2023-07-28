import React from "react";
import Proficiencies from "./Proficiencies";
import EquippedItems from "./EquippedItems";
import OwnedItems from "./OwnedItems";
import { PlayerFragment } from "../../../../../../generated/graphql";

function EquipmentAndProficiencies(props: {
  player: PlayerFragment | undefined;
}) {
  const { player } = props;
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2">
      <Proficiencies />
      <OwnedItems player={player} />
      <EquippedItems player={player} />
    </div>
  );
}

export default EquipmentAndProficiencies;
