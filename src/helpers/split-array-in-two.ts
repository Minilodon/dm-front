export function splitArrayInTwo(array: any[]) {
  return [
    array.slice(0, Math.round(array.length / 2)),
    array.slice(Math.round(array.length / 2)),
  ];
}
