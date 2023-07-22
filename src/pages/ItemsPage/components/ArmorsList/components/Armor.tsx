import React, { useMemo } from "react";
import {
  ArmorFragment,
  useGetPlayersFromArmorQuery,
} from "../../../../../generated/graphql";
import { useModalContext } from "../../../../../contexts/ModalContext";
import ArmorModal from "./ArmorModal";
import PlayersUsing from "../../../../../components/PlayersUsing/PlayersUsing";
import { getArmorPlayersNames } from "../../WeaponsList/helpers/get-armor-players-names";

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

  const { data: playersUsingArmorResponse, loading } =
    useGetPlayersFromArmorQuery({
      variables: { armorId: armor.id },
    });
  const hasPlayersUsingIt =
    !!playersUsingArmorResponse?.getPlayersFromArmor.length;

  const playersNames = useMemo(() => {
    if (!playersUsingArmorResponse) return [];
    return getArmorPlayersNames(playersUsingArmorResponse);
  }, [loading]);

  return (
    <li
      className="px-4 py-2 border-b border-black cursor-pointer flex items-center justify-between"
      onClick={handleSelectArmor}
    >
      <span>{armor.name}</span>
      {hasPlayersUsingIt && <PlayersUsing playersNames={playersNames} />}
    </li>
  );
}

export default Armor;
