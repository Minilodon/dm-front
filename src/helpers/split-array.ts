export function splitArray<T>(array: T[], n: number): T[][] {
  const result: T[][] = [];
  const length = array.length;
  let startIndex = 0;

  while (startIndex < length) {
    result.push(array.slice(startIndex, startIndex + n));
    startIndex += n;
  }

  return result;
}
