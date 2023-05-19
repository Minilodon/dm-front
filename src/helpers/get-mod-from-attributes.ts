export function getModFromAttributes(value: number | undefined) {
  if (!value) return 0;
  return Math.floor((value - 10) / 2);
}
