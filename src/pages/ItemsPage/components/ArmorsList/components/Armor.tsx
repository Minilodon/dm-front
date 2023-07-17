import React from "react";
import { ArmorFragment } from "../../../../../generated/graphql";
import { useModalContext } from "../../../../../contexts/ModalContext";
import ArmorModal from "./ArmorModal";

interface ArmorProps {
  armor: ArmorFragment;
}

function Armor(props: ArmorProps) {
  const { armor } = props;
  const { openModal, setModalContent } = useModalContext();

  const handleSelectArmor = () => {
    setModalContent(<ArmorModal armor={armor} />);
    openModal();
  };

  return (
    <li
      className="px-4 py-2 border-b border-black cursor-pointer"
      onClick={handleSelectArmor}
    >
      {armor.name}
    </li>
  );
}

export default Armor;
