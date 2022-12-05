/* Crie uma classe para representar pessoas que terão como atributos o nome, peso e altura.
Instanciar uma pessoa chamada José que tenha 70kg e 1.75 de altura. Mostrar o imc e
classificar a situacao.*/

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calcBmi() {
        const bmi = this.weight / Math.pow(this.height, 2);
        return bmi.toFixed(2);
    }

    classificationBmi() {
        const bmi = this.calcBmi();

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
}

const jose = new Person('José', 70, 1.75);

console.log('BMI: ' + jose.calcBmi());
console.log(jose.classificationBmi());
