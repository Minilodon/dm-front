import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { useUpdatePlayerMutation } from "../../generated/graphql";
import { usePlayerContext } from "../../pages/Players/contexts/PlayerContext";
import { getCurrentHpPayload } from "./get-current-hp-payload";
import { useModalContext } from "../../contexts/ModalContext";
import Skeleton from "react-loading-skeleton";
import { handleChangeHpInput } from "./handle-change-hp-input";

interface HpChangeInputProps {
  label: string;
}

const HpChangeInput = (props: HpChangeInputProps) => {
  const { label } = props;
  const [currentHP, setCurrentHP] = useState<string>("");
  const { player } = usePlayerContext();
  const { closeModal } = useModalContext();

  const [updatePlayer, { loading }] = useUpdatePlayerMutation({
    refetchQueries: ["getPlayerById"],
  });

  const currentHpPayload = getCurrentHpPayload(
    currentHP,
    player?.currentHitPoints || 0
  );

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!player) return;
    if (event.key === "Enter") {
      try {
        await updatePlayer({
          variables: {
            playerId: player?.id,
            payload: { currentHitPoints: currentHpPayload },
          },
        });
      } catch (error) {
        console.log("Algo deu errado");
      } finally {
        closeModal();
      }
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton width={"100%"} height={"56px"} />
      ) : (
        <TextField
          label={label}
          value={currentHP}
          onChange={(event) => handleChangeHpInput(event, setCurrentHP)}
          inputProps={{
            maxLength: 10,
          }}
          onKeyDown={handleSubmit}
        />
      )}
    </>
  );
};

export default HpChangeInput;
