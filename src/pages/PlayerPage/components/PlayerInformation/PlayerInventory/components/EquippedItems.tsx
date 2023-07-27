import React from "react";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";

function EquippedItems() {
  const {
    playerEquippedEquipments,
    playerEquippedArmors,
    playerEquippedWeapons,
  } = usePlayerContext();
  return (
    <div className="w-full h-full flex flex-col p-2">
      <span className="self-center">Itens Equipados</span>
      <ol className="w-full h-full border border-black overflow-y-auto">
        {playerEquippedEquipments ? (
          playerEquippedEquipments.length ? (
            playerEquippedEquipments.map((equipment, index) => {
              return (
                <li key={index} className="border-b border-b-black px-2 py-1">
                  {equipment.equipmentName}
                </li>
              );
            })
          ) : (
            <span>Sem itens equipados</span>
          )
        ) : (
          <span>Carregando...</span>
        )}
        {playerEquippedArmors ? (
          playerEquippedArmors.length ? (
            playerEquippedArmors.map((armor, index) => {
              return (
                <li key={index} className="border-b border-b-black px-2 py-1">
                  {armor.armorName}
                </li>
              );
            })
          ) : (
            <span>Sem armadura equipada</span>
          )
        ) : (
          <span>Carregando...</span>
        )}
        {playerEquippedWeapons ? (
          playerEquippedWeapons.length ? (
            playerEquippedWeapons.map((weapon, index) => {
              return (
                <li key={index} className="border-b border-b-black px-2 py-1">
                  {weapon.weaponName}
                </li>
              );
            })
          ) : (
            <span>Sem armas equipadas</span>
          )
        ) : (
          <span>Carregando...</span>
        )}
      </ol>
    </div>
  );
}

export default EquippedItems;
