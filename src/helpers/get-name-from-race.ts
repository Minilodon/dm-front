import { RACES } from "../constants/races";
import { Race } from "../generated/graphql";

export function getNameFromRace(race: Race) {
  return RACES.find((r) => r.type === race)?.name || "Raça";
}
