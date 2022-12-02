/* Calcular o IMC a partir do peso e altura de uma pessoa e classifique conforme os valores
abaixo.
IMC < 18.5 = abaixo do peso;
18.5 <= IMC <= 25 = peso normal;
25 < IMC <= 30 = acima do peso;
30 < IMC <= 40 = obeso;
IMC > 40 = obesidade grave.*/

const height = 1.8;
const weight = 75;

const bmi = weight / Math.pow(height, 2);

if (bmi < 18.5) {
    console.log('BMI: ' + bmi.toFixed(2) + ' -> Status: Underweight');
} else if (bmi <= 25) {
    console.log('BMI: ' + bmi.toFixed(2) + ' -> Status: Normal weight');
} else if (bmi <= 30) {
    console.log('BMI: ' + bmi.toFixed(2) + ' -> Status: Overweight');
} else if (bmi <= 40) {
    console.log('BMI: ' + bmi.toFixed(2) + ' -> Status: Obesity');
} else {
    console.log('BMI: ' + bmi.toFixed(2) + ' -> Status: Morbid obesity');
}
