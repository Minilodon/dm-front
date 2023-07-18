import React from "react";

import { EquipmentFragment } from "../../../../../generated/graphql";
import { useModalContext } from "../../../../../contexts/ModalContext";
import EquipmentModal from "./EquipmentModal";

interface EquipmentProps {
  equipment: EquipmentFragment;
}

function Equipment(props: EquipmentProps) {
  const { equipment } = props;
  const { openModal, setModalContent } = useModalContext();

  const handleSelectEquipment = () => {
    setModalContent(<EquipmentModal equipment={equipment} />);
    openModal();
  };

  return (
    <li
      className="px-4 py-2 border-b border-black cursor-pointer"
      onClick={handleSelectEquipment}
    >
      {equipment.name}
    </li>
  );
}

export default Equipment;
