// Verificar se o número de 1 a 100 é par ou ímpar.

const number = 10;
const evenNumber = number % 2 === 0;

if (number === 0) {
  console.log('Invalid. Only numbers from 1 to 100.');
} else if (number > 100) {
  console.log('Invalid. Only numbers from 1 to 100.');
} else if (evenNumber) {
  console.log('Even number');
} else {
  console.log('Odd number');
}
