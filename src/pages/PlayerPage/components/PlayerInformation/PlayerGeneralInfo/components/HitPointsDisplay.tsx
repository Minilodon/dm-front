import React, { useState } from "react";
import ProgressiveBar from "../../../../../../components/ProgressiveBar/ProgressiveBar";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import ChangeHpModal from "../../../../../../components/Modals/ChangeHpModal";

interface HitPointsDisplayProps {
  current: number | undefined;
  total: number | undefined;
  label: string;
  type: "current" | "normal";
}

function HitPointsDisplay(props: HitPointsDisplayProps) {
  const { current, label, total, type } = props;
  const { setModalContent, openModal } = useModalContext();
  const handleClick = () => {
    setModalContent(<ChangeHpModal type={type} />);
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
