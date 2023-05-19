export function getMovementInFt(movement: number | undefined) {
  if (!movement) return 0;
  return (movement / 1.5) * 5;
}
