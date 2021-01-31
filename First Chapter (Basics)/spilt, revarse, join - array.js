var string = "madam";
console.log(string)

var newStringArray = string.split(""); // split every charecter and return as an array.
console.log(newStringArray)

var reversedStringArray = newStringArray.reverse(); // reverse an array with index

console.log(reversedStringArray); 

var reverseFinalString = reversedStringArray.join(""); // join an array element
console.log(reverseFinalString) // reversed final array.

if(string === reverseFinalString){ // check palindrom
    console.log("Palindrom !")
}else{
    console.log("Not Palindrom !")
}