export function convertCurrencyToString(value: number) {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  });
}

export function convertCurrencyToNumber(value: string) {
  const result = value.replace('R$', '').replace(',', '.');
  return Number(result);
}

export function convertNumberToString(value: number | null) {
  if (!value) return undefined;

  let result = String(value);

  result = result.replace(/\D/g, '');
  result = result.replace(/(\d)(\d{2})$/, '$1,$2');
  result = result.replace(/(?=(\d{3})+(\D))\B/, '.');

  return result;
}
