import { ArmorFragment, ArmorType } from "../../../generated/graphql";

export function getArmorAC(armor: ArmorFragment): string {
  switch (armor.type) {
    case ArmorType.Heavy:
      return armor.AC.toString();
    case ArmorType.Light:
      return armor.AC.toString() + " + Modificador de Des";
    case ArmorType.Medium:
      return armor.AC.toString() + " + Modificador de Des (máx 2)";
    case ArmorType.Shield:
      return "+ " + armor.AC.toString();
  }
}
