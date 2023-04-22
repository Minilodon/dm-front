import React from "react";
import XButton from "../../../components/XButton/XButton";
import { PlayerFragment } from "../../../generated/graphql";

interface PlayerCardProps {
  player: PlayerFragment;
  onlyPlayer: boolean;
}

function PlayerCard(props: PlayerCardProps) {
  const { player, onlyPlayer } = props;
  const handleClick = async () => {
    console.log("player deleted!");
    /* await deletePlayer(player._id); */
  };
  const imageLink =
    player.playerImageUrl === ""
      ? "https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
      : player.playerImageUrl ??
        "https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar";
  return (
    <div className="flex flex-col items-center drop-shadow-md w-[200px] min-h-[300px] bg-white p-5 justify-self-start relative">
      {onlyPlayer ? null : (
        <XButton
          className="absolute top-0 right-0 cursor-pointer"
          onClick={handleClick}
        />
      )}
      <div className="h-[150px]">
        <img
          src={imageLink}
          alt={"imagem do jogador"}
          className="max-h-[150px]"
        />
      </div>
      <span className="self-start">{player.name}</span>
      <span className="self-start">{player.currentCurrency}</span>
    </div>
  );
}

export default PlayerCard;
