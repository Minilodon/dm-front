import { Tooltip } from "@mui/material";
import React from "react";
import { useModalContext } from "../../../../../contexts/ModalContext";
import ChangeCurrencyModal from "./ChangeCurrencyModal";
import {
  CurrenciesEnum,
  getCurrencyImage,
} from "../../../../../constants/currencies";
import { PlayerFragment } from "../../../../../generated/graphql";

interface CurrencyDisplayProps {
  currencyType: CurrenciesEnum;
  alt: string;
  currencyValue: number;
  player: PlayerFragment | undefined;
}

function CurrencyDisplay(props: CurrencyDisplayProps) {
  const { currencyValue, currencyType, alt, player } = props;
  const { openModal, setModalContent } = useModalContext();
  const handleOpenModal = async () => {
    setModalContent(
      <ChangeCurrencyModal
        alt={alt}
        modalTitle="Alterar valor"
        currencyType={currencyType}
        currencyValue={currencyValue}
        imageSource={getCurrencyImage(currencyType)}
        player={player}
      />
    );
    openModal();
  };
  return (
    <div
      className="flex gap-x-1 items-center cursor-pointer"
      onClick={handleOpenModal}
    >
      <Tooltip title={alt} arrow>
        <img
          src={getCurrencyImage(currencyType)}
          alt={alt}
          className="w-8 h-8"
        />
      </Tooltip>
      <span>{currencyValue}</span>
    </div>
  );
}

export default CurrencyDisplay;
