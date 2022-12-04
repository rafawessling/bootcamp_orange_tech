/* Refazer o exercício de cálculo do preco final do produto utilizando funcões.*/

function discountPayment(price, discount) {
    return price - price * (discount / 100);
}

function interestPayment(price, interest) {
    return price + price * (interest / 100);
}

function optionPayment(price, option) {
    if (option === 1) {
        const total = discountPayment(price, 15);
        return (
            'Final price: R$ ' + total.toFixed(2) + '\nSituation: Cash or pix.'
        );
    } else if (option === 2) {
        const total = discountPayment(price, 10);
        return 'Final price: R$ ' + total.toFixed(2) + '\nSituation: 1x debit.';
    } else if (option === 3) {
        const total = price;
        return 'Final price: R$ ' + total.toFixed(2) + '\nSituation: 2x card.';
    } else if (option === 4) {
        const total = interestPayment(price, 10);
        return (
            'Final price: R$ ' +
            total.toFixed(2) +
            '\nSituation: 3x or more card'
        );
    } else {
        return 'Invalid option. Try again.';
    }
}

function main() {
    const price = 100.0;
    const option = 1;
    console.log(optionPayment(price, option));
}

main();
