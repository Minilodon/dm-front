import React from "react";
import Button from "../../../components/Button/Button";
import {
  FeatFragment,
  useDeleteFeatMutation,
} from "../../../generated/graphql";
import { useModalContext } from "../../../contexts/ModalContext";
import { useFeatsContext } from "../../../contexts/FeatsContext";

interface DeleteFeatModalProps {
  feat: FeatFragment;
}

function DeleteFeatModal(props: DeleteFeatModalProps) {
  const { feat } = props;
  const { closeModal } = useModalContext();
  const { deleteFeat, loading } = useFeatsContext();
  const handleConfirm = async () => {
    deleteFeat(feat.id);
    closeModal();
  };
  return (
    <div className="flex flex-col w-84 items-center">
      <span className="mb-4">
        Deseja deletar <b className="font-semibold">{feat.name}</b>?
      </span>
      <span className="text-sm mb-2">
        Ao fazer isso, todos os jogadores com esse talento perderão ele
      </span>
      <div className="flex items-center gap-x-2 w-full justify-around">
        <Button label="Cancelar" onClick={closeModal} outlined />
        <Button disabled={loading} label="Sim" onClick={handleConfirm} />
      </div>
    </div>
  );
}

export default DeleteFeatModal;
