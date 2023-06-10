import { Input } from "@mui/material";
import React from "react";
import HpChangeInput from "../HpChangeInput/HpChangeInput";

interface ChangeHpModalProps {
  type: "current" | "normal";
}

function ChangeHpModal(props: ChangeHpModalProps) {
  const { type } = props;
  return (
    <div className="flex flex-col p-4 items-center">
      <span className="mb-2">HP atual</span>
      <HpChangeInput label="Digite novo valor ou diferença" />
    </div>
  );
}

export default ChangeHpModal;
