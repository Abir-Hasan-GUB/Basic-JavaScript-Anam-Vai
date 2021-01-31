var palindrom = "mam i mam";
var convertString = palindrom.toLocaleUpperCase();
var splitString = convertString.split("");
var reversString = splitString.reverse();
var joinedString = reversString.join("");

if(convertString === joinedString){
    console.log("Palindrom!")
}else{
    console.log("Not Palindrom!")
}