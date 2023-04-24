import { Tooltip } from "@mui/material";
import React from "react";

interface CurrencyDisplayProps {
  imageSource: string;
  alt: string;
  currencyValue: number;
}

function CurrencyDisplay(props: CurrencyDisplayProps) {
  const { currencyValue, imageSource, alt } = props;
  return (
    <div className="flex gap-x-1 items-center">
      <Tooltip title={alt} arrow>
        <img src={imageSource} alt={alt} className="w-8 h-8" />
      </Tooltip>
      <span>{currencyValue}</span>
    </div>
  );
}

export default CurrencyDisplay;
