/* Refazer o exercício de cálculo de IMC utilizando funcões.*/

function calcBmi(height, weight) {
    return weight / Math.pow(height, 2);
}

function classificationBmi(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi <= 25) {
        return 'Normal weight';
    } else if (bmi <= 30) {
        return 'Overweight';
    } else if (bmi <= 40) {
        return 'Obesity';
    } else {
        return 'Morbid obesity';
    }
}

function main() {
    const height = 1.8;
    const weight = 75;
    const bmi = calcBmi(height, weight);

    console.log('BMI: ' + bmi.toFixed(2));
    console.log('Status: ' + classificationBmi(bmi));
}

main();
