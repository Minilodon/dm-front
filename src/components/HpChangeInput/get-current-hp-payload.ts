import { extractNumbersFromString } from "../../helpers/extract-numbers-from-string";

export function getCurrentHpPayload(value: string, playerHp: number) {
  const hasMinus = value.includes("-");
  const hasPlus = value.includes("+");
  const number = extractNumbersFromString(value)[0];
  if (hasMinus) {
    return playerHp - number;
  }
  if (hasPlus) {
    return playerHp + number;
  }
  return number;
}
