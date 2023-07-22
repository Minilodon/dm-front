import { GetPlayersFromArmorQuery } from "../../../../../generated/graphql";

export function getArmorPlayersNames(players: GetPlayersFromArmorQuery) {
  if (!players.getPlayersFromArmor) return [];
  return players.getPlayersFromArmor.map(
    (p, index) => p?.name || "Jogador sem nome" + index
  );
}
