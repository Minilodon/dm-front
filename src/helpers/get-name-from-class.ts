import { CLASSES } from "../constants/classes";
import { Class } from "../generated/graphql";

export function getNameFromClass(playerClass: Class) {
  return (
    CLASSES.find((existingClass) => existingClass.type === playerClass)?.name ||
    "Desconhecida"
  );
}
