/* Refazer o exercício de cálculo do valor de combustível gasto em uma viagem utilizando funcões.*/

function priceTrip(
    distance,
    averageConsumption,
    fuelType,
    priceEthanol,
    priceGasoline
) {
    if (
        fuelType === 'ethanol' ||
        fuelType === 'Ethanol' ||
        fuelType === 'e' ||
        fuelType === 'E'
    ) {
        const total = (distance / averageConsumption) * priceEthanol;
        return total.toFixed(2);
    } else if (
        fuelType === 'gasoline' ||
        fuelType === 'Gasoline' ||
        fuelType === 'g' ||
        fuelType === 'G'
    ) {
        const total = (distance / averageConsumption) * priceGasoline;
        return total.toFixed(2);
    } else {
        return 'Invalid option! Try again.';
    }
}

function main() {
    const distance = 500;
    const averageConsumption = 14;
    const fuelType = 'G';
    const priceEthanol = 3.99;
    const priceGasoline = 5.85;

    console.log(
        priceTrip(
            distance,
            averageConsumption,
            fuelType,
            priceEthanol,
            priceGasoline
        )
    );
}

main();
