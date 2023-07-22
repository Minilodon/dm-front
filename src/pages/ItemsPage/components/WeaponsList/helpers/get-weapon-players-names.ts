import { GetPlayersFromWeaponQuery } from "../../../../../generated/graphql";

export function getWeaponPlayersNames(players: GetPlayersFromWeaponQuery) {
  if (!players.getPlayersFromWeapon) return [];
  return players.getPlayersFromWeapon.map(
    (p, index) => p?.name || "Jogador sem nome" + index
  );
}
