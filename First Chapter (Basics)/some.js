// check at least one number match or not.

var array = [1,2,4,6];
var result = array.some(checkOdd); //check at least one number is odd.

console.log(result)

function checkOdd(num){
    var remainder = num % 2;
    if(remainder === 0)
        return false;
        return true;
}