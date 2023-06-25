import React from "react";
import HpChangeInput from "../HpChangeInput/HpChangeInput";
import TempHpChangeInput from "../HpChangeInput/TempHpChangeInput";
import { PlayerFragment } from "../../generated/graphql";

interface ChangeHpModalProps {
  type: "current" | "normal";
  player: PlayerFragment;
}

function ChangeHpModal(props: ChangeHpModalProps) {
  const { type, player } = props;
  return (
    <div className="flex flex-col p-4 items-center">
      <span className="mb-2">{type === "normal" ? "HP" : "Extra HP"}</span>
      {type === "normal" ? (
        <HpChangeInput label="Digite novo valor ou diferença" player={player} />
      ) : (
        <TempHpChangeInput player={player} />
      )}
    </div>
  );
}

export default ChangeHpModal;
