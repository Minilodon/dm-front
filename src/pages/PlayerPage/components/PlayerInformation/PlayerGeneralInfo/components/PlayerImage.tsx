import React from "react";
import { usePlayerContext } from "../../../../../../contexts/PlayerContext";

function PlayerImage() {
  const { player } = usePlayerContext();
  return (
    <div className="h-full mb-4 mt-4 w-[calc(100%-16px)] relative justify-self-center ">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={player?.playerImageUrl || ""}
        alt="Imagem do jogador"
      />
    </div>
  );
}

export default PlayerImage;
