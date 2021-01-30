//forEach doesn't affect to original array --

var bajar = ['Alu', 'beef', 'gorom mosala'];

bajar.forEach(item => {
    console.log(item);
})

// item protita elemet er upor 1 bar kore function run korbe

var newArray = [];
bajar.forEach(item => {
    newArray.push(item + ' Done!'); //insert to new arrray with a msg.
})

console.log(newArray);
console.log(bajar); // main array still same