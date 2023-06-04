import React from "react";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";

function CarryingCapacity() {
  const { player } = usePlayerContext();
  return (
    <div className="flex flex-col flex-1 h-full">
      <h1 className="self-center mb-2 font-semibold">Capacidade de Carga</h1>
      <div className="self-center justify-self-center">
        <span className="text-lg font-semibold">42</span>{" "}
        <span className="text-sm">/ </span>
        <span className="text-lg font-semibold">
          {(player?.attributes?.str || 10) * 7.5}
        </span>{" "}
        kg
      </div>
    </div>
  );
}

export default CarryingCapacity;
