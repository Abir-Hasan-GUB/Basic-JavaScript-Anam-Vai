var bajar = ['alu', 'potol', 'moric', 'vendi']; //array decleration and initialization

console.log(bajar) // main array

var lastItem = bajar.pop(); // remove last element and return last item after remove
console.log(lastItem + " -> removed");

console.log(bajar); // main array . now total elements are 3.

var firstItem = bajar.shift(); // removed 1st item form an array and return it after remove
console.log(firstItem + ' -> removed')

console.log(bajar) // main array. not total element are 2.

bajar.push('vendi'); //add an element on the last of array.
console.log(bajar) // vendi added

bajar.unshift('alu'); // alu added to 1st index of array
console.log(bajar) // alu added

// print every element of array particularly
console.log('\n');
for(var i = 0; i < bajar.length; i++){
    console.log(i+1, '==>', bajar[i], '->', [i]);
}