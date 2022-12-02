/* Calcular o valor gasto de combustível em uma viagem.
Variáveis: preco do combustível, consumo médio de gasto do carro e distancia da viagem.
Imprimir o valor gasto.*/

const fuelPrice = 5.85;
const averageConsumption = 13;
const distance = 500;

const total = (distance / averageConsumption) * fuelPrice;

console.log('Total Price: R$', total.toFixed(2));
