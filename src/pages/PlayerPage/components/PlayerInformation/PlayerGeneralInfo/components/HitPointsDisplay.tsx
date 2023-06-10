import React, { useState } from "react";
import ProgressiveBar from "../../../../../../components/ProgressiveBar/ProgressiveBar";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import { Input } from "@mui/material";

interface HitPointsDisplayProps {
  current: number | undefined;
  total: number | undefined;
  label: string;
}

function HitPointsDisplay(props: HitPointsDisplayProps) {
  const { current, label, total } = props;
  const { setModalContent, openModal } = useModalContext();
  const [content, setContent] = useState("");
  const handleClick = () => {
    setModalContent(
      <div className="flex flex-col p-4 items-center">
        <span>HP</span>
        <Input />
      </div>
    );
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
