function sum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

const result = sum(10, 20);
console.log(result)

function avarage(){
    let avarage = (arguments[0] + arguments[1]) / arguments.length; //"arguments" is speical type of variable
    return avarage;
}

const avarageResult = avarage(10,15);
console.log(avarageResult)