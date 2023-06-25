export function getPlayerIdInPathname(pathname: string) {
  const [, playerId] = pathname.split("players/");
  if (!playerId) return null;
  return parseInt(playerId);
}
