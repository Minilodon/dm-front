import React, { useState } from "react";
import { useModalContext } from "../../../../../contexts/ModalContext";
import { usePlayerContext } from "../../../contexts/PlayerContext";
import Button from "../../../../../components/Button/Button";
import ActionsContainer from "./ActionsContainer";
import { CurrenciesEnum } from "../../../../../constants/currencies";
import {
  PlayerFragment,
  UpdateCurrencyInput,
  useUpdatePlayerCurrencyMutation,
} from "../../../../../generated/graphql";

interface ChangeCurrencyModalProps {
  modalTitle: string;
  currencyValue: number;
  imageSource: string;
  alt: string;
  currencyType: CurrenciesEnum;
  player: PlayerFragment | undefined;
}

function ChangeCurrencyModal(props: ChangeCurrencyModalProps) {
  const { currencyValue, modalTitle, imageSource, alt, currencyType, player } =
    props;
  const { closeModal } = useModalContext();
  const handleCancel = () => {
    closeModal();
  };
  const [inputValue, setInputValue] = useState<string>("0");
  const [selectedChoice, setSelectedChoice] = useState<
    "change" | "add" | "subtract" | undefined
  >();

  const [updateCurrency, { loading }] = useUpdatePlayerCurrencyMutation({
    refetchQueries: "all",
  });

  const handleSubmit = async () => {
    if (!player || !inputValue) return;
    const newCurrency =
      selectedChoice === "add"
        ? parseInt(inputValue) + currencyValue
        : selectedChoice === "change"
        ? parseInt(inputValue)
        : currencyValue - parseInt(inputValue);
    const payload: UpdateCurrencyInput = {};
    payload[currencyType] = newCurrency;
    await updateCurrency({ variables: { playerId: player.id, payload } });
    closeModal();
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-lg mb-2 self-center">
        Jogador: <b className="font-semibold">{player?.name}</b>
      </h1>
      <div className="flex gap-3 items-center justify-around">
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold">{modalTitle}</span>
          <img src={imageSource} alt={alt} className="w-16 h-16" />
        </div>
        <ActionsContainer
          currencyValue={currencyValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
        />
      </div>
      <div className="flex gap-x-3 mt-3">
        <Button onClick={handleCancel} label="Cancelar" outlined />
        <Button
          onClick={handleSubmit}
          label="Alterar"
          disabled={!!!selectedChoice}
        />
      </div>
    </div>
  );
}

export default ChangeCurrencyModal;
