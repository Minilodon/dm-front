import React from "react";
import { WeaponFragment } from "../../../../../generated/graphql";
import { useDrawerContext } from "../../../../../contexts/DrawerContext";
import { useModalContext } from "../../../../../contexts/ModalContext";
import EditWeaponDrawer from "./EditWeaponDrawer";
import { getFormattedCost } from "../../../helpers/get-formatted-cost";
import { getWeaponType } from "../helpers/get-weapon-type";
import { getDamageType } from "../helpers/get-damage-type";

interface WeaponModalProps {
  weapon: WeaponFragment;
}

function WeaponModal(props: WeaponModalProps) {
  const { weapon } = props;
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const { closeModal } = useModalContext();
  const handleEditWeapon = () => {
    closeModal();
    setDrawerTitle("Editar Arma");
    setDrawerContent(<EditWeaponDrawer weapon={weapon} />);
    openDrawer();
  };
  return (
    <div className="flex flex-col relative">
      <div
        className="absolute top-0 right-0 cursor-pointer bg-red-600 text-white px-4 py-1 border border:white hover:border-black"
        onClick={handleEditWeapon}
      >
        Editar
      </div>
      <span className="mb-2">{weapon.name}</span>
      <div className="flex gap-x-4">
        <div className="w-[200px] h-[283px] border-black border bg-white flex">
          {weapon.weaponImage ? (
            <img
              className="object-cover"
              alt={"Imagem da arma"}
              src={weapon.weaponImage || ""}
            />
          ) : (
            <span>Sem imagem</span>
          )}
        </div>
        <div className="w-[280px] h-[283px] flex flex-col p-2">
          <span>{getWeaponType(weapon.type)[0]}</span>
          <span>{getWeaponType(weapon.type)[1]}</span>
          <span>Preço (PO): {getFormattedCost(weapon.cost)}</span>
          <span>
            Dano: {weapon.diceQuantity}d{weapon.damageDice} de dano{" "}
            {getDamageType(weapon.dmgType)}
          </span>
          <span>Peso: {weapon.weight} Kg</span>
          <span className="h-full flex flex-col">
            <p>Descrição:</p>
            <span className="text-sm">{weapon.description}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeaponModal;
