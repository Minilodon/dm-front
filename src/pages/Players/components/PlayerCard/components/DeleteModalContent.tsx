import React from "react";
import Button from "../../../../../components/Button/Button";
import { useModalContext } from "../../../../../contexts/ModalContext";
import { usePlayerContext } from "../../../contexts/PlayerContext";

interface DeleteModalContentProps {
  playerName: string;
}

function DeleteModalContent(props: DeleteModalContentProps) {
  const { playerName } = props;
  const { closeModal } = useModalContext();
  const { deletePlayer, selectedPlayer } = usePlayerContext();

  const handleDelete = async () => {
    if (!selectedPlayer) {
      console.log("Deu ruim");
      return;
    }
    await deletePlayer();
    closeModal();
  };

  return (
    <div className="flex flex-col">
      <h1 className="mb-5">
        Deletar jogador <b>{playerName}?</b>
      </h1>
      <div className="flex gap-x-3">
        <Button label="Cancelar" onClick={closeModal} outlined />
        <Button label="Deletar" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default DeleteModalContent;
