import React from "react";
import { ArmorFragment } from "../../../../../generated/graphql";
import { getArmorAC } from "../../../helpers/get-armor-ac";
import { getFormattedCost } from "../../../helpers/get-formatted-cost";
import { getArmorType } from "../../../helpers/get-armor-type";
import { getArmorMinStr } from "../../../helpers/get-armor-min-str";
import { useDrawerContext } from "../../../../../contexts/DrawerContext";
import { useModalContext } from "../../../../../contexts/ModalContext";
import EditArmorDrawer from "./EditArmorDrawer";

interface ArmorModalProps {
  armor: ArmorFragment;
}

function ArmorModal(props: ArmorModalProps) {
  const { armor } = props;
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const { closeModal } = useModalContext();
  const handleEditArmor = () => {
    closeModal();
    setDrawerTitle("Editar Armadura");
    setDrawerContent(<EditArmorDrawer armor={armor} />);
    openDrawer();
  };
  return (
    <div className="flex flex-col relative">
      <div
        className="absolute top-0 right-0 cursor-pointer bg-red-600 text-white px-4 py-1 border border:white hover:border-black"
        onClick={handleEditArmor}
      >
        Editar
      </div>
      <span className="mb-2">{armor.name}</span>
      <div className="flex gap-x-4">
        <div className="w-[200px] h-[283px] border-black border bg-blue-200 flex">
          <img
            className="object-cover"
            alt={"Imagem da armadura"}
            src={
              armor.armorImage ||
              "https://i.pinimg.com/564x/21/6b/95/216b957abadc8da056eebbf29d94cc10.jpg"
            }
          />
        </div>
        <div className="w-[280px] h-[283px] flex flex-col p-2">
          <span className="flex-1">{getArmorType(armor.type)}</span>
          <span className="flex-1">AC: {getArmorAC(armor)}</span>
          <span className="flex-1">Custo: {getFormattedCost(armor.cost)}</span>
          <span className="flex-1">
            Força mínima para usar: {getArmorMinStr(armor.minStr)}
          </span>
          <span className="flex-1">
            Desvantagem em furtividade: {armor.stealthDis ? "Sim" : "Não"}
          </span>
          <span className="flex-1">Peso: {armor.weight} kg</span>
        </div>
      </div>
    </div>
  );
}

export default ArmorModal;
