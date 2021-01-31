// filter array element by condition.

var array = [1,2,4,6,7,5];

var filterdArray = array.filter(checkOdd);
console.log(filterdArray)

function checkOdd(num){
    var remainder = num % 2;
    if(remainder === 0)
        return false;
        return true;
}