export function getProfBonus(level: number | undefined) {
  if (!level) return 0;
  return Math.floor(level / 4) + 2;
}
