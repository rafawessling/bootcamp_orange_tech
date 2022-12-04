/* Refazer o exercício de cálculo da média do aluno utilizando funcões.*/

function verifyGrades(grade1, grade2, grade3) {
    if (grade1 < 0 || grade2 < 0 || grade3 < 0) {
        return 'Invalid grade. Only grades from 0 to 10 are allowed.';
    } else if (grade1 > 10 || grade2 > 10 || grade3 > 10) {
        return 'Invalid grade. Only grades from 0 to 10 are allowed.';
    }
}

function averageStudent(grade1, grade2, grade3) {
    return ((grade1 + grade2 + grade3) / 3).toFixed(2);
}

function situationStudent(grade1, grade2, grade3) {
    if (averageStudent(grade1, grade2, grade3) < 5) {
        return 'Disapproved.';
    } else if (
        averageStudent(grade1, grade2, grade3) >= 5 &&
        averageStudent(grade1, grade2, grade3) < 7
    ) {
        return 'Recovery.';
    } else {
        return 'Approved.';
    }
}

function main() {
    const grade1 = 9.0;
    const grade2 = 5.8;
    const grade3 = 6.5;

    if (verifyGrades(grade1, grade2, grade3) == null) {
        console.log('Average: ' + averageStudent(grade1, grade2, grade3));
        console.log('Situation: ' + situationStudent(grade1, grade2, grade3));
    } else {
        console.log(verifyGrades(grade1, grade2, grade3));
    }
}

main();
