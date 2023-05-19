import { RACES } from "../constants/races";
import { Race } from "../generated/graphql";

export function getNameFromRace(race: Race | undefined) {
  if (!race) return "Não informada";
  return RACES.find((r) => r.type === race)?.name || "Raça";
}
