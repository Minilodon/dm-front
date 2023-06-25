import React from "react";
import Shield from "../../../../../../components/Icons/Shield.svg";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import ChangeACModal from "../../../../../../components/Modals/ChangeACModal";

function ACDisplay() {
  const { player } = usePlayerContext();
  const { openModal, setModalContent } = useModalContext();
  const handleOpenModal = () => {
    setModalContent(<ChangeACModal />);
    openModal();
  };
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={handleOpenModal}
    >
      <span>AC</span>
      <div className="w-10 h-10 relative flex items-center justify-center">
        <img
          src={Shield}
          alt="Ícone de escudo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span>{player?.armorClass}</span>
      </div>
    </div>
  );
}

export default ACDisplay;
