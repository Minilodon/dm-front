import { Checkbox } from "@mui/material";
import React from "react";
import { usePlayerContext } from "../../../../../Players/contexts/PlayerContext";
import { useUpdatePlayerMutation } from "../../../../../../generated/graphql";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import Skeleton from "react-loading-skeleton";

function InspirationDisplay() {
  const { player } = usePlayerContext();
  const [updatePlayer, { loading }] = useUpdatePlayerMutation({
    refetchQueries: "all",
  });
  const { closeModal } = useModalContext();
  const handleSubmit = async () => {
    if (!player) return;
    try {
      await updatePlayer({
        variables: {
          playerId: player.id,
          payload: { inspiration: !player.inspiration },
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      closeModal();
    }
  };
  return (
    <div className="flex items-center flex-col">
      <span>Inspiração</span>
      {loading ? (
        <Skeleton height={"42px"} width={"42px"} />
      ) : (
        <Checkbox
          checked={player?.inspiration || false}
          onClick={handleSubmit}
        />
      )}
    </div>
  );
}

export default InspirationDisplay;
