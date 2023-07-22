import { GetPlayersFromEquipmentQuery } from "../../../../../generated/graphql";

export function getEquipmentPlayersNames(
  players: GetPlayersFromEquipmentQuery
) {
  if (!players.getPlayersFromEquipment) return [];
  return players.getPlayersFromEquipment.map(
    (p, index) => p?.name || "Jogador sem nome" + index
  );
}
