/* Crie uma classe de carros que devem possuir nome, marca, cor, e a média de km por litro
de combustível. Crie um método que dado a quantidade de km e o preco do combustível, retorne 
o valor gasto para realizar este percurso.*/

class Car {
    name;
    brand;
    color;
    averageConsumption;

    constructor(name, brand, color, averageConsumption) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.averageConsumption = averageConsumption;
    }

    totalPriceTrip(distance, fuelPrice) {
        const total = (distance / this.averageConsumption) * fuelPrice;
        return total.toFixed(2);
    }
}

const gol = new Car('Gol', 'Volkswagen', 'Silver', 14.5);
const palio = new Car('Palio', 'Fiat', 'White', 13.7);

console.log(gol.name + ' -> Total price: R$ ' + gol.totalPriceTrip(500, 5.69));
console.log(
    palio.name + ' -> Total price: R$ ' + palio.totalPriceTrip(500, 5.69)
);
