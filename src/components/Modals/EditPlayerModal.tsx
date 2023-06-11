import { TextField } from "@mui/material";
import React, { useState } from "react";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { useModalContext } from "../../contexts/ModalContext";
import Button from "../Button/Button";
import {
  UpdatePlayerInput,
  useUpdatePlayerMutation,
} from "../../generated/graphql";
import { playerProperties } from "./playerProperties";

interface EditPlayerModalProps {
  title: string;
  inputLabel: string;
  playerField: playerProperties;
  fieldType: "number" | "string";
}

function EditPlayerModal(props: EditPlayerModalProps) {
  const { title, inputLabel, playerField, fieldType } = props;
  const [state, setState] = useState("");
  const { player } = usePlayerContext();
  const { closeModal } = useModalContext();

  const [updatePlayer, { loading }] = useUpdatePlayerMutation({
    refetchQueries: ["getPlayerById"],
  });

  const handleChangeString = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setState("");
      return;
    }
    setState(event.target.value);
  };

  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setState(numericValue);
  };

  const payloadValue = fieldType === "number" ? parseInt(state) : state;

  const handleSubmit = async () => {
    if (!player) return;
    const payload: UpdatePlayerInput = { [playerField]: payloadValue };
    try {
      await updatePlayer({
        variables: {
          playerId: player?.id,
          payload,
        },
      });
    } catch (error) {
      console.log("Algo deu errado");
    } finally {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col p-4 items-center">
      <span className="mb-2">{title}</span>
      <TextField
        label={inputLabel}
        value={state}
        onChange={
          fieldType === "string" ? handleChangeString : handleChangeNumber
        }
        type="text"
      />
      <Button
        label={loading ? "Salvando..." : "Salvar"}
        className="self-center mt-2"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default EditPlayerModal;
