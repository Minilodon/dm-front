import React from "react";
import Proficiencies from "./Proficiencies";
import EquippedItems from "./EquippedItems";
import OwnedItems from "./OwnedItems";

function EquipmentAndProficiencies() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2">
      <Proficiencies />
      <OwnedItems />
      <EquippedItems />
    </div>
  );
}

export default EquipmentAndProficiencies;
