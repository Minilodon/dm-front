import { Tooltip } from "@mui/material";
import React from "react";
import { useModalContext } from "../../../../../contexts/ModalContext";
import ChangeCurrencyModal from "./ChangeCurrencyModal";
import { Currencies } from "../../../../../contexts/PlayerContext";

interface CurrencyDisplayProps {
  imageSource: string;
  alt: string;
  currencyValue: number;
  currencyType: Currencies;
}

function CurrencyDisplay(props: CurrencyDisplayProps) {
  const { currencyValue, imageSource, alt, currencyType } = props;
  const { openModal, setModalContent } = useModalContext();
  const handleClick = () => {
    setModalContent(
      <ChangeCurrencyModal
        modalTitle={alt}
        currencyValue={currencyValue}
        imageSource={imageSource}
        alt={alt}
        currencyType={currencyType}
      />
    );
    openModal();
  };
  return (
    <div className="flex gap-x-1 items-center" onClick={handleClick}>
      <Tooltip title={alt} arrow>
        <img src={imageSource} alt={alt} className="w-8 h-8" />
      </Tooltip>
      <span>{currencyValue}</span>
    </div>
  );
}

export default CurrencyDisplay;
