export const extractNumbersFromString = (str: string): number[] => {
  const numbers = str.match(/\d+/g);

  if (numbers) {
    return numbers.map(Number);
  }

  return [];
};
