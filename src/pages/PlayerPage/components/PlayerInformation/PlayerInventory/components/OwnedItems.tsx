import React from "react";
import {
  PlayerFragment,
  useUpdatePlayerArmorMutation,
  useUpdatePlayerEquipmentMutation,
  useUpdatePlayerWeaponMutation,
} from "../../../../../../generated/graphql";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";
import clsx from "clsx";

function OwnedItems(props: { player: PlayerFragment | undefined }) {
  const { player } = props;
  const {
    playerUnequippedEquipments,
    playerUnequippedArmors,
    playerUnequippedWeapons,
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
  const handleEquipItem = async (equipmentId: number) => {
    if (!player) return;
    try {
      await updatePlayerEquipment({
        variables: {
          payload: { playerId: player.id, equipmentId, equipped: true },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEquipArmor = async (armorId: number) => {
    if (!player) return;
    try {
      await updatePlayerArmor({
        variables: {
          payload: { playerId: player.id, armorId, equipped: true },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEquipWeapon = async (weaponId: number) => {
    if (!player) return;
    try {
      await updatePlayerWeapon({
        variables: {
          payload: { playerId: player.id, weaponId, equipped: true },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full row-span-2 flex flex-col p-2">
      <span className="self-center">Itens na mochila</span>
      <ol className="w-full h-full border-black border overflow-y-auto flex flex-col">
        {playerUnequippedEquipments ? (
          playerUnequippedEquipments.length ? (
            playerUnequippedEquipments.map((equipment, index) => {
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
                    onClick={() => handleEquipItem(equipment.equipmentId)}
                  >
                    Equipar
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
        {playerUnequippedArmors ? (
          playerUnequippedArmors.length ? (
            playerUnequippedArmors.map((armor, index) => {
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
                    onClick={() => handleEquipArmor(armor.armorId)}
                  >
                    Equipar
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
        {playerUnequippedWeapons ? (
          playerUnequippedWeapons.length ? (
            playerUnequippedWeapons.map((weapon, index) => {
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
                    onClick={() => handleEquipWeapon(weapon.weaponId)}
                  >
                    Equipar
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

export default OwnedItems;
