import React from "react";
import { PlayerFragment } from "../../../../generated/graphql";
import PlayerCurrencies from "./components/PlayerCurrencies";
import { usePlayerContext } from "../../../../contexts/PlayerContext";
import { useModalContext } from "../../../../contexts/ModalContext";
import DeleteModalContent from "./components/DeleteModalContent";
import Paper from "../../../../components/Paper/Paper";
import { getNameFromClass } from "../../../../helpers/get-name-from-class";
import { getNameFromRace } from "../../../../helpers/get-name-from-race";
import PlayerModal from "../PlayerModal/PlayerModal";

interface PlayerCardProps {
  player: PlayerFragment;
}

function PlayerCard(props: PlayerCardProps) {
  const { player } = props;
  const { setSelectedPlayer } = usePlayerContext();
  const { openModal, setModalContent } = useModalContext();
  const imageLink =
    player.playerImageUrl ||
    "https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar";

  const handleDelete = () => {
    setSelectedPlayer(player);
    setModalContent(
      <DeleteModalContent playerName={player.name || "Jogador"} />
    );
    openModal();
  };
  const handleSeeMoreInfo = () => {
    setSelectedPlayer(player);
    setModalContent(<PlayerModal />);
    openModal();
  };
  return (
    <Paper onClick={() => setSelectedPlayer(player)}>
      <span
        className="absolute top-3 right-3 hover:text-red-700"
        onClick={handleDelete}
      >
        X
      </span>
      <div className="h-[150px]">
        <img
          src={imageLink}
          alt={"imagem do jogador"}
          className="max-h-[150px]"
          onClick={handleSeeMoreInfo}
        />
      </div>
      <span className="self-start text-lg font-semibold">{player.name}</span>
      <div className="flex w-full flex-col justify-between">
        <span>{getNameFromRace(player.race) ?? ""}</span>
        <span>{getNameFromClass(player.class) ?? ""}</span>
      </div>
      <PlayerCurrencies
        copper={player.currency?.copper || 0}
        elektrum={player.currency?.elektrum || 0}
        gold={player.currency?.gold || 0}
        platinum={player.currency?.platinum || 0}
        silver={player.currency?.silver || 0}
      />
    </Paper>
  );
}

export default PlayerCard;
