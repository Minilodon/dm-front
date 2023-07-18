import React from "react";
import {
  EquipmentFragment,
  EquipmentType,
} from "../../../../../generated/graphql";
import { useDrawerContext } from "../../../../../contexts/DrawerContext";
import { useModalContext } from "../../../../../contexts/ModalContext";
import EditEquipmentDrawer from "./EditEquipmentDrawer";
import { getFormattedCost } from "../../../helpers/get-formatted-cost";
import { getEquipmentType } from "../helpers/get-equipment-type";

interface EquipmentModalProps {
  equipment: EquipmentFragment;
}

function EquipmentModal(props: EquipmentModalProps) {
  const { equipment } = props;
  const { openDrawer, setDrawerContent, setDrawerTitle } = useDrawerContext();
  const { closeModal } = useModalContext();
  const handleEditEquipment = () => {
    closeModal();
    setDrawerTitle("Editar Equipamento");
    setDrawerContent(<EditEquipmentDrawer equipment={equipment} />);
    openDrawer();
  };
  return (
    <div className="flex flex-col relative">
      <div
        className="absolute top-0 right-0 cursor-pointer bg-red-600 text-white px-4 py-1 border border:white hover:border-black"
        onClick={handleEditEquipment}
      >
        Editar
      </div>
      <span className="mb-2">{equipment.name}</span>
      <div className="flex gap-x-4">
        <div className="w-[200px] h-[283px] border-black border bg-white flex">
          {equipment.equipmentImage ? (
            <img
              className="object-cover"
              alt={"Imagem da arma"}
              src={equipment.equipmentImage || ""}
            />
          ) : (
            <span>Sem imagem</span>
          )}
        </div>
        <div className="w-[280px] h-[283px] flex flex-col p-2">
          {equipment.capacity && (
            <span className="flex-1">Capacidade: {equipment.capacity}</span>
          )}
          <span className="flex-1">
            Custo (PO): {getFormattedCost(equipment.cost)}
          </span>
          <span className="flex-1">Descrição: {equipment.description}</span>
          {equipment.type === EquipmentType.Other ? null : (
            <span className="flex-1">{getEquipmentType(equipment.type)}</span>
          )}
          <span className="flex-1">Peso: {equipment.weight} kg</span>
        </div>
      </div>
    </div>
  );
}

export default EquipmentModal;
