export function getPercentageValue(
  current: number | undefined,
  total: number | undefined
) {
  if (!current || !total) return 0;
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
}
