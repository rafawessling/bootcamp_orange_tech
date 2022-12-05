// Comparing ages of people

class Person {
    name;
    age;
    yearOfBirth;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2022 - age;
    }
    description() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}.`);
    }
}

function comparePeople(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} is older than ${p2.name}`);
    } else if (p1.age < p2.age) {
        console.log(`${p2.name} is older than ${p1.name}`);
    } else {
        console.log(`${p1.name} and ${p2.name} are the same age`);
    }
}

const ana = new Person('Ana da Silva', 26);
const joana = new Person('Joana Silveira', 30);

comparePeople(ana, joana);
