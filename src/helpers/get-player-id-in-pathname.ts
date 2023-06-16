export function getPlayerIdInPathname(pathname: string) {
  const [, playerId] = pathname.split("player/");
  if (!playerId) return null;
  return parseInt(playerId);
}
