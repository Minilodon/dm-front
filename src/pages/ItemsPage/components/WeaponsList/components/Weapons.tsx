import React, { useMemo } from "react";
import {
  WeaponFragment,
  useGetPlayersFromWeaponQuery,
} from "../../../../../generated/graphql";
import { useModalContext } from "../../../../../contexts/ModalContext";
import WeaponModal from "./WeaponModal";
import PlayersUsing from "../../../../../components/PlayersUsing/PlayersUsing";
import { getWeaponPlayersNames } from "../helpers/get-weapon-players-names";

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

  const { data: playersUsingWeaponResponse, loading } =
    useGetPlayersFromWeaponQuery({
      variables: { weaponId: weapon.id },
    });
  const hasPlayersUsingIt =
    !!playersUsingWeaponResponse?.getPlayersFromWeapon.length;

  const playersNames = useMemo(() => {
    if (!playersUsingWeaponResponse) return [];
    return getWeaponPlayersNames(playersUsingWeaponResponse);
  }, [loading]);

  return (
    <li
      className="px-4 py-2 border-b border-black cursor-pointer flex items-center justify-between"
      onClick={handleSelectWeapon}
    >
      <span>{weapon.name}</span>
      {hasPlayersUsingIt && <PlayersUsing playersNames={playersNames} />}
    </li>
  );
}

export default Weapon;
