import { ChangeEvent } from "react";

export function handleChangeHpInput(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: (value: React.SetStateAction<string>) => void
) {
  const inputValue: string = event.target.value;

  // Remove qualquer caractere que não seja número, "-" ou "+"
  const sanitizedValue: string = inputValue.replace(/[^0-9+-]/g, "");

  // Verifica se "+" ou "-" estão sendo inseridos em posições inválidas
  if (sanitizedValue.length > 1) {
    setState(sanitizedValue[0] + sanitizedValue.slice(1).replace(/[+-]/g, ""));
  } else {
    setState(sanitizedValue);
  }
}
