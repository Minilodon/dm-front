import React from "react";
import { PlayerFragment } from "../../../../generated/graphql";
import { usePlayerContext } from "../../../../contexts/PlayerContext";
import { useModalContext } from "../../../../contexts/ModalContext";
import DeleteModalContent from "./components/DeleteModalContent";
import Paper from "../../../../components/Paper/Paper";
import { getNameFromClass } from "../../../../helpers/get-name-from-class";
import { getNameFromRace } from "../../../../helpers/get-name-from-race";
import { useNavigate } from "react-router-dom";
import HitPointsDisplay from "../../../PlayerPage/components/PlayerInformation/PlayerGeneralInfo/components/HitPointsDisplay";

interface PlayerCardProps {
  player: PlayerFragment;
}

function PlayerCard(props: PlayerCardProps) {
  const { player } = props;
  const { setSelectedPlayer } = usePlayerContext();
  const { openModal, setModalContent } = useModalContext();
  const navigate = useNavigate();
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
    navigate(`/player/${player.id}`);
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
      <div className="w-[350px]">
        <HitPointsDisplay
          label="HP:"
          current={player?.currentHitPoints}
          total={player?.hitPoints}
          type="normal"
        />
        <HitPointsDisplay
          label="Extra:"
          current={player?.currentTemporaryHitPoints}
          total={player?.temporaryHitPoints}
          type="current"
        />
      </div>
    </Paper>
  );
}

export default PlayerCard;
