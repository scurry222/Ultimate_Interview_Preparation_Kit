// By using Factories, implement a factory ToyFactory that can create a toy duck and a toy car object using either the ToyDuck or ToyCar function constructor.

// A ToyDuck object should have the following properties:

// color
// price

// A ToyCar object should have the following properties:

// color
// price
// name

// Input #
// createToy function called with different parameters

// Output #
// Toy duck or car object created depending on the inputs

// Sample input #
// var toyFactory = new ToyFactory();
// var car = toyFactory.createToy({
//             toyType : "car",
//             color: "blue",
//             price : 12,
//             name : "honda"
// })
// Sample output #
// ToyCar { color: 'blue', price: 12, name: 'honda' }

class ToyFactory {
    constructor() {
        this.toy = ToyDuck;
        this.createToy = (toyChosen) => {
            if (!toyChosen.toyType || toyChosen.toyType === 'duck') this.toy = ToyDuck;
            else if (toyChosen.toyType === 'car') this.toy = ToyCar;
            return new this.toy(toyChosen);
        };
    }
}

class ToyCar {
    constructor(toyObj) {
        this.name = toyObj.name;
        this.color = toyObj.color;
        this.price = toyObj.price;
    }
}

class ToyDuck {
    constructor(toyObj) {
    this.color = toyObj.color;
    this.price = toyObj.price;
    }
}


var toyFactory = new ToyFactory();
var car = toyFactory.createToy({
            toyType : "car",
            color: "blue",
            price : 12,
            name : "honda"
})

var duck = toyFactory.createToy({
    color: "blue",
    price : 12,
})

console.log(duck)
console.log(car)
