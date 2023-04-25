import React from "react";
import { PlayerFragment } from "../../../../generated/graphql";
import PlayerCurrencies from "./components/PlayerCurrencies";
import { usePlayerContext } from "../../../../contexts/PlayerContext";

interface PlayerCardProps {
  player: PlayerFragment;
}

function PlayerCard(props: PlayerCardProps) {
  const { player } = props;
  const { setSelectedPlayer } = usePlayerContext();
  const imageLink =
    player.playerImageUrl === ""
      ? "https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
      : player.playerImageUrl ??
        "https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar";
  return (
    <div
      className="flex flex-col items-center drop-shadow-md min-w-80 min-h-[300px] bg-white p-5 justify-self-start cursor-pointer hover:scale-105 transition"
      onClick={() => setSelectedPlayer(player)}
    >
      <div className="h-[150px]">
        <img
          src={imageLink}
          alt={"imagem do jogador"}
          className="max-h-[150px]"
        />
      </div>
      <span className="self-start text-lg font-semibold">{player.name}</span>
      <PlayerCurrencies
        copper={player.copper || 0}
        elektrum={player.elektrum || 0}
        gold={player.gold || 0}
        platinum={player.platinum || 0}
        silver={player.silver || 0}
      />
    </div>
  );
}

export default PlayerCard;
