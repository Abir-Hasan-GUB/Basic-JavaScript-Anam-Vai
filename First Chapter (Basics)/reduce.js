/**
 * 1st itaration: a = 0, b = 1
 * 2nd itaration: a = 1, b = 2
 * 3rd itaration: a = 3, b = 3
 * 4th itaration: a = 6 (sum of previous itarations values 'a & b'), b = 4
 */

var array = [1,2,3,4];
var sum = array.reduce((a,b) => {
    return a + b;
}, 0) //set initial valu 0

console.log("Sum is: "+sum)