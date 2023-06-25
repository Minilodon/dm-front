import React, { useState } from "react";
import ProgressiveBar from "../../../../../../components/ProgressiveBar/ProgressiveBar";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import ChangeHpModal from "../../../../../../components/Modals/ChangeHpModal";
import { PlayerFragment } from "../../../../../../generated/graphql";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";

interface HitPointsDisplayProps {
  current: number | undefined;
  total: number | undefined;
  label: string;
  type: "current" | "normal";
  player: PlayerFragment;
}

function HitPointsDisplay(props: HitPointsDisplayProps) {
  const { current, label, total, type, player } = props;
  const { setModalContent, openModal } = useModalContext();
  const { setSelectedPlayer } = usePlayerContext();
  const handleClick = () => {
    setSelectedPlayer(player);
    setModalContent(<ChangeHpModal type={type} player={player} />);
    openModal();
  };
  return (
    <div
      className="h-6 flex items-center gap-x-2 w-full pr-2 cursor-pointer"
      onClick={handleClick}
    >
      <span className="break-keep">{label}</span>
      <ProgressiveBar currentValue={current} maxValue={total} />
    </div>
  );
}

export default HitPointsDisplay;
