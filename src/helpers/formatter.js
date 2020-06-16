const currencyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentageFormatter = Intl.NumberFormat('pt-BR', {
  style: 'percent',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatCurrency = (value) => currencyFormatter.format(value);
const formatPercentage = (value) => percentageFormatter.format(value);

export { formatCurrency, formatPercentage };
