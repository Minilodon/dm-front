import { DamageType } from "../../../../../generated/graphql";

export function getDamageType(damageType: DamageType) {
  switch (damageType) {
    case "Acid":
      return "ácido";
    case "Bludgeoning":
      return "contundente";
    case "Cold":
      return "gélido";
    case "Fire":
      return "ígneo";
    case "Force":
      return "de força";
    case "Lightning":
      return "elétrico";
    case "Necrotic":
      return "necrótico";
    case "Piercing":
      return "perfurante";
    case "Poison":
      return "venenoso";
    case "Psychic":
      return "psiquico";
    case "Radiant":
      return "radiante";
    case "Slashing":
      return "cortante";
    case "Thunder":
      return "trovejante";
    default:
      return "mágico";
  }
}
