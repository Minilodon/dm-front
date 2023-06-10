import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { useUpdatePlayerMutation } from "../../generated/graphql";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { getCurrentHpPayload } from "./get-current-hp-payload";
import { useModalContext } from "../../contexts/ModalContext";

interface HpChangeInputProps {
  label: string;
}

const HpChangeInput = (props: HpChangeInputProps) => {
  const { label } = props;
  const [value, setValue] = useState<string>("");
  const { player } = usePlayerContext();
  const { closeModal } = useModalContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;

    // Remove qualquer caractere que não seja número, "-" ou "+"
    const sanitizedValue: string = inputValue.replace(/[^0-9+-]/g, "");

    // Verifica se "+" ou "-" estão sendo inseridos em posições inválidas
    if (sanitizedValue.length > 1) {
      setValue(
        sanitizedValue[0] + sanitizedValue.slice(1).replace(/[+-]/g, "")
      );
    } else {
      setValue(sanitizedValue);
    }
  };

  const [updatePlayer, { loading }] = useUpdatePlayerMutation({
    refetchQueries: ["getPlayerById"],
  });

  const currentHp = getCurrentHpPayload(value, player?.currentHitPoints || 0);

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!player) return;
    if (event.key === "Enter") {
      try {
        const updatedPlayer = await updatePlayer({
          variables: {
            playerId: player?.id,
            payload: { currentHitPoints: currentHp },
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
    <div className="flex flex-col">
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        inputProps={{
          maxLength: 10,
        }}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default HpChangeInput;
