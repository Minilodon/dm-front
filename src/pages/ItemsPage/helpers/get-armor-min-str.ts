export function getArmorMinStr(minStr: number | null | undefined) {
  if (!minStr) return "0";
  return minStr.toString();
}
