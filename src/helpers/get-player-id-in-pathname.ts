export function getPlayerIdInPathname(pathname: string): string {
  const [, playerId] = pathname.split("player/");
  if (!playerId) return "0";
  return playerId;
}
