import React from "react";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";

function MovementDisplay() {
  const { player } = usePlayerContext();
  return (
    <div className="flex items-center flex-col mb-4">
      <span>Deslocamento</span>
      <span>{player?.movement} m</span>
    </div>
  );
}

export default MovementDisplay;
