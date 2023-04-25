import { Currencies } from "../PlayerContext";

export function getPayloadFromCurrencyType(
  currencyType: Currencies,
  newCurrency: number
) {
  switch (currencyType) {
    case "gold":
      return {
        gold: newCurrency,
      };
    case "silver":
      return {
        silver: newCurrency,
      };
    case "elektrum":
      return {
        elektrum: newCurrency,
      };
    case "copper":
      return {
        copper: newCurrency,
      };
    case "platinum":
      return {
        platinum: newCurrency,
      };
    default:
      break;
  }
}
