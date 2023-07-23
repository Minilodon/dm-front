import { TextField } from "@mui/material";
import React, { useState } from "react";
import {
  PlayerFragment,
  useUpdatePlayerMutation,
} from "../../generated/graphql";
import { useModalContext } from "../../contexts/ModalContext";

interface Props {
  player: PlayerFragment;
}

function ChangeACModal(props: Props) {
  const { player } = props;
  const [armorClass, setArmorClass] = useState<number | "">(
    player.armorClass || ""
  );
  const { closeModal } = useModalContext();
  const [updatePlayer, { loading }] = useUpdatePlayerMutation({
    refetchQueries: "all",
  });

  const handleTotalTempHpChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numericValue = event.target.value.replace(/[^0-9]/g, "");
    setArmorClass(numericValue === "" ? "" : parseInt(numericValue));
  };

  const handleSubmit = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!player) {
      console.log("jogador não selecionado");
      return;
    }
    if (e.key === "Enter") {
      try {
        await updatePlayer({
          variables: {
            playerId: player.id,
            payload: {
              armorClass: armorClass === "" ? player.armorClass : armorClass,
            },
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
    <div className="flex flex-col p-4 items-center">
      <span>AC</span>
      <TextField
        label="Classe de armadura"
        value={armorClass}
        onChange={handleTotalTempHpChange}
        type="text"
        inputProps={{
          pattern: "[0-9]*",
        }}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default ChangeACModal;
