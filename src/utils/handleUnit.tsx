export default function handleUnit(unit: string, quantity: number) {
  if (quantity > 1 && unit === 'unidade') {
    return `${quantity} unidades`;
  }

  return `${quantity} ${unit}`;
}
