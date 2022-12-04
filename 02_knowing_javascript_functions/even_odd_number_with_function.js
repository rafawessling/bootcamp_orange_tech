/* Refazer o exercício de verificar se o número entre 1 e 100 é par ou ímpar utilizando funcões.*/

function verifyNumber(number) {
    if (number === 0) {
        return 'Invalid. Only numbers from 1 to 100.';
    } else if (number > 100) {
        return 'Invalid. Only numbers from 1 to 100.';
    } else if (number % 2 == 0) {
        return 'Even number';
    } else {
        return 'Odd number';
    }
}

function main() {
    const number = 10;

    console.log(verifyNumber(number));
}

main();
