import React from "react";
import { WeaponFragment } from "../../../../../generated/graphql";
import { useModalContext } from "../../../../../contexts/ModalContext";
import WeaponModal from "./WeaponModal";

interface WeaponProps {
  weapon: WeaponFragment;
}

function Weapon(props: WeaponProps) {
  const { weapon } = props;
  const { openModal, setModalContent } = useModalContext();

  const handleSelectWeapon = () => {
    setModalContent(<WeaponModal weapon={weapon} />);
    openModal();
  };

  return (
    <li
      className="px-4 py-2 border-b border-black cursor-pointer"
      onClick={handleSelectWeapon}
    >
      {weapon.name}
    </li>
  );
}

export default Weapon;
