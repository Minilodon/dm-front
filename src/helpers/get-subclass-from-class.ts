import { CLASSES } from "../constants/classes";
import { Class } from "../generated/graphql";

export function getSubclassFromClass(playerClass: Class | undefined) {
  if (!playerClass) return "Não informada";
  return (
    CLASSES.find((existingClass) => existingClass.type === playerClass)
      ?.subclass || "Desconhecida"
  );
}
