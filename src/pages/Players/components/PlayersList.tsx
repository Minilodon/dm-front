import React from "react";
import PlayerCard from "./PlayerCard/PlayerCard";
import { usePlayerContext } from "../contexts/PlayerContext";

const PlayersList = () => {
  const { loading, players } = usePlayerContext();
  return (
    <div className="flex flex-wrap gap-5 mt-3">
      {loading ? (
        <span>Carregando...</span>
      ) : !!players ? (
        players.map((player) => <PlayerCard player={player} key={player.id} />)
      ) : (
        <span>Sem jogadores registrados</span>
      )}
    </div>
  );
};

export default PlayersList;
