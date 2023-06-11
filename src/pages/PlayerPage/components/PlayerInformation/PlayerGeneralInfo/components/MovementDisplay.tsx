import React from "react";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import EditPlayerModal from "../../../../../../components/Modals/EditPlayerModal";
import { playerProperties } from "../../../../../../components/Modals/playerProperties";

function MovementDisplay() {
  const { player } = usePlayerContext();
  const { openModal, setModalContent } = useModalContext();
  const handleOpenModal = () => {
    setModalContent(
      <EditPlayerModal
        fieldType="number"
        inputLabel="Insira o novo deslocamento"
        playerField={playerProperties.movement}
        title="Deslocamento"
      />
    );
    openModal();
  };
  return (
    <div
      className="flex items-center flex-col mb-4 cursor-pointer"
      onClick={handleOpenModal}
    >
      <span>Deslocamento</span>
      <span>{player?.movement} m</span>
    </div>
  );
}

export default MovementDisplay;
