import React from "react";
import PlayerCard from "./PlayerCard";
import { usePlayerContext } from "../../../contexts/PlayerContext";

const PlayersList = () => {
  const { loading, players } = usePlayerContext();
  const onlyPlayer = players?.length === 1;
  return (
    <div className="flex flex-wrap gap-5 mt-3">
      {loading ? (
        <span>Carregando...</span>
      ) : !!players ? (
        players.map((player) => (
          <PlayerCard player={player} key={player.id} onlyPlayer={onlyPlayer} />
        ))
      ) : (
        <span>Sem jogadores registrados</span>
      )}
    </div>
  );
};

export default PlayersList;
