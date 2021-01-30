// map function work on every element and return a new array.
// original array not afffercted

var bajar = ['alu', 'Beef', 'gorom mashla'];

var updateBajar = bajar.map(item =>{
    return item + " Done!"; // return a new array
})

console.log(updateBajar)
console.log(bajar) // original array remain same