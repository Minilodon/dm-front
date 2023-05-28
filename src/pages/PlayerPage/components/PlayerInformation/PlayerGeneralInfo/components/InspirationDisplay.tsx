import { Checkbox } from "@mui/material";
import React from "react";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";

function InspirationDisplay() {
  const { player } = usePlayerContext();
  return (
    <div className="flex items-center flex-col">
      <span>Inspiração</span>
      <Checkbox checked={player?.inspiration || false} />
    </div>
  );
}

export default InspirationDisplay;
