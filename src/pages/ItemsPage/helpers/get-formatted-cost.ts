export function getFormattedCost(costInCopper: number) {
  if (costInCopper % 100 === 0) {
    return costInCopper / 100 + " PO";
  }
  if (costInCopper % 10 === 0) {
    return costInCopper / 10 + " PP";
  }
  return costInCopper + " PC";
}
