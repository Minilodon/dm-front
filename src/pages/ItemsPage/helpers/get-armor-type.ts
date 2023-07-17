import { ArmorType } from "../../../generated/graphql";

export function getArmorType(armorType: ArmorType) {
  switch (armorType) {
    case ArmorType.Heavy:
      return "Armadura Pesada";
    case ArmorType.Light:
      return "Armadura Leve";
    case ArmorType.Medium:
      return "Armadura Média";
    case ArmorType.Shield:
      return "Escudo";
  }
}
