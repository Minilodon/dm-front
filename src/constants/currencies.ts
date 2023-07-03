import Copper from "../pages/Players/components/PlayerCard/images/Copper.png";
import Silver from "../pages/Players/components/PlayerCard/images/Silver.png";
import Elektrum from "../pages/Players/components/PlayerCard/images/Elektrum.png";
import Gold from "../pages/Players/components/PlayerCard/images/Gold.png";
import Platinum from "../pages/Players/components/PlayerCard/images/Platinum.png";

export enum CurrenciesEnum {
  copper = "copper",
  elektrum = "elektrum",
  gold = "gold",
  platinum = "platinum",
  silver = "silver",
}

interface ICurrencies {
  type: CurrenciesEnum;
  imageSource: string;
  alt: string;
}

export const Currencies: ICurrencies[] = [
  {
    type: CurrenciesEnum.copper,
    imageSource: Copper,
    alt: "imagem da moeda de cobre",
  },
  {
    type: CurrenciesEnum.silver,
    imageSource: Silver,
    alt: "imagem da moeda de prata",
  },
  {
    type: CurrenciesEnum.elektrum,
    imageSource: Elektrum,
    alt: "imagem da moeda de elektrum",
  },
  {
    type: CurrenciesEnum.gold,
    imageSource: Gold,
    alt: "imagem da moeda de ouro",
  },
  {
    type: CurrenciesEnum.platinum,
    imageSource: Platinum,
    alt: "imagem da moeda de platina",
  },
];

export function getCurrencyImage(type: CurrenciesEnum) {
  return Currencies.find((currency) => currency.type === type)!.imageSource;
}
