import { Input } from "@mui/material";
import React from "react";
import HpChangeInput from "../HpChangeInput/HpChangeInput";
import TempHpChangeInput from "../HpChangeInput/TempHpChangeInput";

interface ChangeHpModalProps {
  type: "current" | "normal";
}

function ChangeHpModal(props: ChangeHpModalProps) {
  const { type } = props;
  return (
    <div className="flex flex-col p-4 items-center">
      <span className="mb-2">{type === "normal" ? "HP" : "Extra HP"}</span>
      {type === "normal" ? (
        <HpChangeInput label="Digite novo valor ou diferença" />
      ) : (
        <TempHpChangeInput />
      )}
    </div>
  );
}

export default ChangeHpModal;
