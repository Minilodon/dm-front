import { Sizes } from "../constants/sizes";
import { Size } from "../generated/graphql";

export function getPtSize(size: Size | undefined) {
  if (!size) return "Não definido";
  return (
    Sizes.find((registeredSize) => registeredSize.type === size)?.name ||
    "Não definido"
  );
}
