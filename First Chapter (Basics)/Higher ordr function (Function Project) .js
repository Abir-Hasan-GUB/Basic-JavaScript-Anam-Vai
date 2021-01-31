// higher order function means "It is a function which is a function and return also a function"

function generator(type){
    if(type === "plus"){
        return (a,b) => a + b;
    }
    else if(type === "minus"){
        return (a,b) => a - b;
    }
    else if(type === "divide"){
        return (a,b) => a / b;
    }
    else if(type === "multiply"){
        return (a,b) => a * b;
    }
    else return "Wrong Function name !"
}

const a = 10, b = 5;

let minus = generator("minus");
console.log("Minus = "+ minus(a, b));

let plus = generator("plus");
console.log("Plus = " + plus(a, b));

let divide = generator("divide");
console.log("Divide = " +divide(a, b));

let multiply = generator("multiply");
console.log("Multiply = " +multiply(a, b));