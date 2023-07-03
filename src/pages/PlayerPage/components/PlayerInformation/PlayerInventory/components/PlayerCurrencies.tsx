import React from "react";
import Copper from "../../../../../Players/components/PlayerCard/images/Copper.png";
import Silver from "../../../../../Players/components/PlayerCard/images/Silver.png";
import Gold from "../../../../../Players/components/PlayerCard/images/Gold.png";
import Elektrum from "../../../../../Players/components/PlayerCard/images/Elektrum.png";
import Platinum from "../../../../../Players/components/PlayerCard/images/Platinum.png";
import Divider from "@mui/material/Divider/Divider";
import CurrencyDisplay from "../../../../../Players/components/PlayerCard/components/CurrencyDisplay";
import { PlayerFragment } from "../../../../../../generated/graphql";
import { useModalContext } from "../../../../../../contexts/ModalContext";
import { CurrenciesEnum } from "../../../../../../constants/currencies";

interface PlayerCurrenciesProps {
  gold: number;
  silver: number;
  elektrum: number;
  platinum: number;
  copper: number;
  player: PlayerFragment | undefined;
}

function PlayerCurrencies(props: PlayerCurrenciesProps) {
  const { copper, elektrum, gold, platinum, silver, player } = props;
  return (
    <div className="flex items-center gap-x-2 self-center p-4">
      <CurrencyDisplay
        alt="Moeda de cobre"
        currencyValue={copper}
        currencyType={CurrenciesEnum.copper}
        player={player}
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de prata"
        currencyValue={silver}
        currencyType={CurrenciesEnum.silver}
        player={player}
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de elektrum"
        currencyValue={elektrum}
        currencyType={CurrenciesEnum.elektrum}
        player={player}
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de ouro"
        currencyValue={gold}
        currencyType={CurrenciesEnum.gold}
        player={player}
      />
      <Divider orientation="vertical" flexItem />
      <CurrencyDisplay
        alt="Moeda de platina"
        currencyValue={platinum}
        currencyType={CurrenciesEnum.platinum}
        player={player}
      />
    </div>
  );
}

export default PlayerCurrencies;
