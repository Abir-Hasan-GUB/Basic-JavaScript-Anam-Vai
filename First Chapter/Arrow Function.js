// Arrow function is "Function Expression";

//reguler function-
function add(a,b){
   return a + b;
}
console.log(add(10,20));

// convert with arrow function
let sum = (a,b) => a + b;
console.log(sum(10,10))

// convert with arrow function
let test = (a, b) => {
    a = 10 + a;
    b = 10 + b;
    return a + b;
}
console.log(test(10,10));