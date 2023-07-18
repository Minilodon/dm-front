import { WeaponType } from "../../../../../generated/graphql";

export function getWeaponType(type: WeaponType): Array<string> {
  switch (type) {
    case "MartialMelee":
      return ["Arma Marcial", "Corpo a Corpo"];
    case "MartialRanged":
      return ["Arma Marcial", "à Distância"];
    case "SimpleMelee":
      return ["Arma Simples", "Corpo a Corpo"];
    case "SimpleRanged":
      return ["Arma Marcial", "à Distância"];
    default:
      return ["", ""];
  }
}
