/* Faca um algorítmo que calcule e imprime a média de um aluno e sua classificacão conforme
as 3 notas tiradas no semetre.
Sendo que: média < 5 = reprovado; 5 <= media < 7 = recuperacão; e media >= 7 = aprovado.*/

const grade1 = 8.0;
const grade2 = 4.8;
const grade3 = 6.5;

const average = (grade1 + grade2 + grade3) / 3;

if (grade1 < 0 || grade2 < 0 || grade3 < 0) {
    console.log('Invalid grade. Only grades from 0 to 10 are allowed.');
} else if (grade1 > 10 || grade2 > 10 || grade3 > 10) {
    console.log('Invalid grade. Only grades from 0 to 10 are allowed.');
} else if (average < 5) {
    console.log(`Average: ${average.toFixed(2)} -> Situation: Disapproved.`);
} else if (average >= 5 && average < 7) {
    console.log(`Average: ${average.toFixed(2)} -> Situation: Recovery.`);
} else {
    console.log(`Average: ${average.toFixed(2)} -> Situation: Approved.`);
}
