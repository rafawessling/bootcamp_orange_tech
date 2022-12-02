/* Elaborar um algorítmo que calcule o valor final de um produto com base na condicão de
pagamento:
1 - 15% de desconto à vista no dinheiro ou pix
2 - 10% de desconto à vista no débito
3 - Preco de etiqueta no cartão em 2x sem juros
4 - 10% de juros no cartão em 3x ou mais.
*/

const price = 100.0;
const option = 1;

if (option === 1) {
    const total = price * 0.85;
    console.log(
        'Final price: R$ ' + total.toFixed(2) + '\nSituation: Cash or pix.'
    );
} else if (option === 2) {
    const total = price * 0.9;
    console.log(
        'Final price: R$ ' + total.toFixed(2) + '\nSituation: 1x debit.'
    );
} else if (option === 3) {
    const total = price;
    console.log(
        'Final price: R$ ' + total.toFixed(2) + '\nSituation: 2x card.'
    );
} else if (option === 4) {
    const total = price * 1.1;
    console.log(
        'Final price: R$ ' + total.toFixed(2) + '\nSituation: 3x or more card'
    );
} else {
    console.log('Invalid option. Try again.');
}
