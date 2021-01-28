// JS run first all declaration.
// we know that funcion are 2 types
        /**
         * 1. Function declaration
         * Ex: function(){return 10 + 2}
         * 
         * 2. Function expression
         * Ex: let sum = function(){return 1+2}
         */
/**
 *  NB: Function also run first all variable declaration but not insertion
 * So that if we call a variable before declaration with insertion then
 * return it 'undefined'.
 * */ 

console.log(add()); //okay

 function add(){
     return 1+2;
 }

// console.log(sum()); // get error here

let sum = function(){
    return 1 + 2;
}

console.log(test) // print undefined (we only use 'var' here not 'let or const')
var test = 10; 