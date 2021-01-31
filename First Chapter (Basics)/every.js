// run a specific function to all of array items
// if all is true then return true
// if one item is false of an array then return false.

var checkEven = (num) => {
    var remainder = (num % 2);
    if(remainder === 0) return true;
    return false;
}

var array = [1,2,4,6,8];
var result = array.every(checkEven);
console.log(result)