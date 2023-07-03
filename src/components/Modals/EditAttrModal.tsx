import React, { useState } from "react";
import { usePlayerContext } from "../../pages/Players/contexts/PlayerContext";
import {
  AttributesEnum,
  PlayerFragment,
  UpdateAttributesInput,
  useUpdatePlayerAttributesMutation,
} from "../../generated/graphql";
import { TextField } from "@mui/material";
import Button from "../Button/Button";
import {
  getAttributeMutation,
  getAttributeName,
} from "../../constants/attributes";
import { useModalContext } from "../../contexts/ModalContext";

interface EditAttrModalProps {
  attr: AttributesEnum;
  player: PlayerFragment | undefined;
}

function EditAttrModal(props: EditAttrModalProps) {
  const { attr, player } = props;
  const { closeModal } = useModalContext();
  const [updatePlayerMutation] = useUpdatePlayerAttributesMutation({
    refetchQueries: "all",
  });
  const [value, setValue] = useState("");

  const attrMutation = getAttributeMutation(attr);
  const handleSave = async () => {
    if (!player) return;
    const payload: UpdateAttributesInput = {};
    payload[attrMutation] = parseInt(value);
    try {
      await updatePlayerMutation({
        variables: { playerId: player.id, payload },
      });
    } catch (error) {
      console.log("opa");
    } finally {
      closeModal();
    }
  };
  const attrName = getAttributeName(attr);
  return (
    <div className="p-4 flex flex-col items-center">
      <span>{attrName}</span>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
      <Button onClick={handleSave} label="Salvar" className="mt-2" />
    </div>
  );
}

export default EditAttrModal;
