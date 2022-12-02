/* Calcular o valor gasto de combustível em uma viagem.
Variáveis: preco do etanol, preco da gasolina, tipo de combustivel, consumo médio de
gasto do carro e distancia da viagem.
Imprimir o valor gasto.*/

const priceGasoline = 5.85;
const priceEthanol = 3.99;
const fuelType = 'G';
const averageConsumption = 13;
const distance = 500;

if (
    fuelType === 'ethanol' ||
    fuelType === 'Ethanol' ||
    fuelType === 'e' ||
    fuelType === 'E'
) {
    const total = (distance / averageConsumption) * priceEthanol;
    console.log('Total Price: R$', total.toFixed(2));
} else if (
    fuelType === 'gasoline' ||
    fuelType === 'Gasoline' ||
    fuelType === 'g' ||
    fuelType === 'G'
) {
    const total = (distance / averageConsumption) * priceGasoline;
    console.log('Total Price: R$', total.toFixed(2));
} else {
    console.log('Invalid option! Try again.');
}
