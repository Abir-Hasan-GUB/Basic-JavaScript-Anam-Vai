function Human(type, live) {
    this.type = type;
    this.live = live;
}

class createHuman extends Human{
    constructor(name){
        super('Domestic', 'Alive'); // call parent class / object and initialize it (Must call every time)
        this.name = name; //set class property
    }
}

var cow = new createHuman('Cow');
console.log(cow)
console.log(cow.name)
console.log(cow.type)
console.log(cow.live)