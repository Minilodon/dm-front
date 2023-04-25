import React, { useState } from "react";
import { useModalContext } from "../../../../../contexts/ModalContext";
import {
  Currencies,
  usePlayerContext,
} from "../../../../../contexts/PlayerContext";
import Button from "../../../../../components/Button/Button";
import ActionsContainer from "./ActionsContainer";

interface ChangeCurrencyModalProps {
  modalTitle: string;
  currencyValue: number;
  imageSource: string;
  alt: string;
  currencyType: Currencies;
}

function ChangeCurrencyModal(props: ChangeCurrencyModalProps) {
  const { currencyValue, modalTitle, imageSource, alt, currencyType } = props;
  const { setSelectedPlayer, changeCurrency, selectedPlayer, loading } =
    usePlayerContext();
  const { closeModal } = useModalContext();
  const handleCancel = () => {
    closeModal();
    setSelectedPlayer(undefined);
  };
  const [inputValue, setInputValue] = useState<string>("0");
  const [selectedChoice, setSelectedChoice] = useState<
    "change" | "add" | "subtract" | undefined
  >();

  const handleSubmit = async () => {
    if (!selectedPlayer || !inputValue) return;
    const newCurrency =
      selectedChoice === "add"
        ? parseInt(inputValue) + currencyValue
        : selectedChoice === "change"
        ? parseInt(inputValue)
        : currencyValue - parseInt(inputValue);
    await changeCurrency(currencyType, newCurrency);
    closeModal();
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-lg mb-2 self-center">
        Jogador: <b className="font-semibold">{selectedPlayer?.name}</b>
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
