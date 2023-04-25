import React from "react";
import Copper from "../images/Copper.png";
import Silver from "../images/Silver.png";
import Gold from "../images/Gold.png";
import Elektrum from "../images/Elektrum.png";
import Platinum from "../images/Platinum.png";
import Divider from "@mui/material/Divider/Divider";
import CurrencyDisplay from "./CurrencyDisplay";

interface PlayerCurrenciesProps {
  gold: number;
  silver: number;
  elektrum: number;
  platinum: number;
  copper: number;
}

function PlayerCurrencies(props: PlayerCurrenciesProps) {
  const { copper, elektrum, gold, platinum, silver } = props;
  return (
    <div className="flex items-center gap-x-2">
      <CurrencyDisplay
        alt="Moeda de cobre"
        currencyValue={copper}
        imageSource={Copper}
        currencyType="copper"
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de prata"
        currencyValue={silver}
        imageSource={Silver}
        currencyType="silver"
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de elektrum"
        currencyValue={elektrum}
        imageSource={Elektrum}
        currencyType="elektrum"
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de ouro"
        currencyValue={gold}
        imageSource={Gold}
        currencyType="gold"
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de platina"
        currencyValue={platinum}
        imageSource={Platinum}
        currencyType="platinum"
      />
    </div>
  );
}

export default PlayerCurrencies;
