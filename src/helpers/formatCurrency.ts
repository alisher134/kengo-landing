export const formatCurrency = (value: number): string => {
  const formatNumberWithSpaces = (num: number): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return `${formatNumberWithSpaces(value)} ₸`;
};
