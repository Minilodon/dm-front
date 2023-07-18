import { EquipmentType } from "../../../../../generated/graphql";

export function getEquipmentType(type: EquipmentType) {
  switch (type) {
    case EquipmentType.Artisan:
      return "Ferramenta do artesão";
    case EquipmentType.Gaming:
      return "Ferramenta do jogador";
    case EquipmentType.Musical:
      return "Ferramenta do músico";
    default:
      return null;
  }
}
