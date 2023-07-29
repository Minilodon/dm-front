import React from "react";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";
import clsx from "clsx";
import {
  PlayerFragment,
  useUpdatePlayerArmorMutation,
  useUpdatePlayerEquipmentMutation,
  useUpdatePlayerWeaponMutation,
} from "../../../../../../generated/graphql";

function EquippedItems(props: { player: PlayerFragment | undefined }) {
  const { player } = props;
  const {
    playerEquippedEquipments,
    playerEquippedArmors,
    playerEquippedWeapons,
  } = usePlayerContext();
  const [updatePlayerEquipment] = useUpdatePlayerEquipmentMutation({
    refetchQueries: "all",
  });
  const [updatePlayerArmor] = useUpdatePlayerArmorMutation({
    refetchQueries: "all",
  });
  const [updatePlayerWeapon] = useUpdatePlayerWeaponMutation({
    refetchQueries: "all",
  });
  const handleUnequipItem = async (equipmentId: number) => {
    if (!player) return;
    try {
      await updatePlayerEquipment({
        variables: {
          payload: { playerId: player.id, equipmentId, equipped: false },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnequipArmor = async (armorId: number) => {
    if (!player) return;
    try {
      await updatePlayerArmor({
        variables: {
          payload: { playerId: player.id, armorId, equipped: false },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnequipWeapon = async (weaponId: number) => {
    if (!player) return;
    try {
      await updatePlayerWeapon({
        variables: {
          payload: { playerId: player.id, weaponId, equipped: false },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full flex flex-col p-2">
      <span className="self-center">Itens Equipados</span>
      <ol className="w-full h-full border border-black overflow-y-auto flex flex-col">
        {playerEquippedEquipments ? (
          playerEquippedEquipments.length ? (
            playerEquippedEquipments.map((equipment, index) => {
              return (
                <li
                  key={index}
                  className="border-b border-b-black px-2 py-1 flex items-center justify-between"
                >
                  <span>{equipment.equipmentName}</span>
                  <span>{equipment.quantity}</span>
                  <span
                    className={clsx(
                      "cursor-pointer hover:text-red-600 transition"
                    )}
                    onClick={() => handleUnequipItem(equipment.equipmentId)}
                  >
                    Desequipar
                  </span>
                </li>
              );
            })
          ) : (
            <span className="border-b border-b-black px-2 py-1">
              Sem itens equipados
            </span>
          )
        ) : (
          <span className="border-b border-b-black px-2 py-1">
            Carregando...
          </span>
        )}
        {playerEquippedArmors ? (
          playerEquippedArmors.length ? (
            playerEquippedArmors.map((armor, index) => {
              return (
                <li
                  key={index}
                  className="border-b border-b-black px-2 py-1 flex items-center justify-between"
                >
                  <span>{armor.armorName}</span>
                  <span>{armor.quantity}</span>
                  <span
                    className={clsx(
                      "cursor-pointer hover:text-red-600 transition"
                    )}
                    onClick={() => handleUnequipArmor(armor.armorId)}
                  >
                    Desequipar
                  </span>
                </li>
              );
            })
          ) : (
            <span className="border-b border-b-black px-2 py-1">
              Sem armadura equipada
            </span>
          )
        ) : (
          <span className="border-b border-b-black px-2 py-1">
            Carregando...
          </span>
        )}
        {playerEquippedWeapons ? (
          playerEquippedWeapons.length ? (
            playerEquippedWeapons.map((weapon, index) => {
              return (
                <li
                  key={index}
                  className="border-b border-b-black px-2 py-1 flex items-center justify-between"
                >
                  <span>{weapon.weaponName}</span>
                  <span>{weapon.quantity}</span>
                  <span
                    className={clsx(
                      "cursor-pointer hover:text-red-600 transition"
                    )}
                    onClick={() => handleUnequipWeapon(weapon.weaponId)}
                  >
                    Desequipar
                  </span>
                </li>
              );
            })
          ) : (
            <span className="border-b border-b-black px-2 py-1">
              Sem armas equipadas
            </span>
          )
        ) : (
          <span className="border-b border-b-black px-2 py-1">
            Carregando...
          </span>
        )}
      </ol>
    </div>
  );
}

export default EquippedItems;
