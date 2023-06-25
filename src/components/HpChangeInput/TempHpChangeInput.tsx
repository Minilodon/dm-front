import React, { useState } from "react";
import { usePlayerContext } from "../../pages/Players/contexts/PlayerContext";
import { useModalContext } from "../../contexts/ModalContext";
import { useUpdatePlayerMutation } from "../../generated/graphql";
import { getCurrentHpPayload } from "./get-current-hp-payload";
import Skeleton from "react-loading-skeleton";
import { TextField } from "@mui/material";
import { handleChangeHpInput } from "./handle-change-hp-input";
import Button from "../Button/Button";

function TempHpChangeInput() {
  const [currentTemporaryHP, setCurrentTemporaryHP] = useState<string>("");
  const [totalTemporaryHP, setTotalTemporaryHP] = useState<number | "">("");
  const { player } = usePlayerContext();
  const { closeModal } = useModalContext();

  const [updatePlayer, { loading }] = useUpdatePlayerMutation({
    refetchQueries: ["getPlayerById"],
  });

  const currentTemporaryHpPayload = getCurrentHpPayload(
    currentTemporaryHP,
    player?.currentTemporaryHitPoints || 0
  );

  const handleTotalTempHpChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setTotalTemporaryHP(numericValue === "" ? "" : parseInt(numericValue));
  };

  const handleSubmit = async () => {
    if (!player) return;
    try {
      await updatePlayer({
        variables: {
          playerId: player?.id,
          payload: {
            currentTemporaryHitPoints:
              currentTemporaryHpPayload === 1337
                ? player.currentTemporaryHitPoints
                : currentTemporaryHpPayload,
            temporaryHitPoints: totalTemporaryHP === "" ? 0 : totalTemporaryHP,
          },
        },
      });
    } catch (error) {
      console.log("Algo deu errado");
    } finally {
      closeModal();
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col gap-y-2">
          <Skeleton width={"100%"} height={"56px"} />
          <Skeleton width={"100%"} height={"56px"} />
        </div>
      ) : (
        <div className="flex flex-col gap-y-2">
          <TextField
            label="Valor total"
            value={totalTemporaryHP}
            onChange={handleTotalTempHpChange}
            type="text"
            inputProps={{
              pattern: "[0-9]*",
            }}
          />
          <TextField
            label={"Valor atual"}
            value={currentTemporaryHP}
            onChange={(event) =>
              handleChangeHpInput(event, setCurrentTemporaryHP)
            }
            inputProps={{
              maxLength: 10,
            }}
          />
          <Button
            label={loading ? "Salvando..." : "Salvar"}
            onClick={handleSubmit}
            className="self-center"
          />
        </div>
      )}
    </>
  );
}

export default TempHpChangeInput;
