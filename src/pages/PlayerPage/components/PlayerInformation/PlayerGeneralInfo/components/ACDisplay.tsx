import React from "react";
import Shield from "../../../../../../components/Icons/Shield.svg";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import ChangeACModal from "../../../../../../components/Modals/ChangeACModal";
import { PlayerFragment } from "../../../../../../generated/graphql";

interface Props {
  player: PlayerFragment;
}

function ACDisplay(props: Props) {
  const { player } = props;
  const { openModal, setModalContent } = useModalContext();
  const handleOpenModal = () => {
    setModalContent(<ChangeACModal player={player} />);
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
        <span>{player.armorClass}</span>
      </div>
    </div>
  );
}

export default ACDisplay;
