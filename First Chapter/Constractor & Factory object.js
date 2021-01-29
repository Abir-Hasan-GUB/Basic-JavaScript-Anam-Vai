function CreateHuman(name, age, gander){
    return{
        name: name,
        age: age,
        gander: gander
    }
}

var person1 = CreateHuman('Abir', 22, 'M');
console.log(person1)

var person2 = CreateHuman('Alif', 17, 'M');
console.log(person2)


// only support on Node JS (Browser not support it)
function CreateHuman(name, age, gander){
    return{
        name,
        age,
        gander
    }
}

var person3 = CreateHuman('Person 3', 22, 'M');
console.log(person3)

var person3 = CreateHuman('Person 4', 17, 'M');
console.log(person3)


// ============== Create obj using Constractor =========

function Human(name, type){ // constractor name's first charecter should be capital 
    this.name = name;
    this.type = type;
}

var Human1 = new Human('New Object 1', 'Laptop');
var Human2 = new Human('New Object 2', 'Desktop');

console.log(Human1);
console.log(Human2);