import React, { useMemo } from "react";

import {
  EquipmentFragment,
  useGetPlayersFromEquipmentQuery,
} from "../../../../../generated/graphql";
import { useModalContext } from "../../../../../contexts/ModalContext";
import EquipmentModal from "./EquipmentModal";
import PlayersUsing from "../../../../../components/PlayersUsing/PlayersUsing";
import { getEquipmentPlayersNames } from "../../WeaponsList/helpers/get-equipment-players.names";

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
  const { data: playersUsingEquipmentResponse, loading } =
    useGetPlayersFromEquipmentQuery({
      variables: { equipmentId: equipment.id },
    });
  const hasPlayersUsingIt =
    !!playersUsingEquipmentResponse?.getPlayersFromEquipment.length;

  const playersNames = useMemo(() => {
    if (!playersUsingEquipmentResponse) return [];
    return getEquipmentPlayersNames(playersUsingEquipmentResponse);
  }, [loading]);

  return (
    <li
      className="px-4 py-2 border-b border-black cursor-pointer flex items-center justify-between"
      onClick={handleSelectEquipment}
    >
      <span>{equipment.name}</span>
      {hasPlayersUsingIt && <PlayersUsing playersNames={playersNames} />}
    </li>
  );
}

export default Equipment;
