// RegExp('pattern' , "flag")

let r = RegExp('abc*',"i");
let s = "abccccccccC";
console.log(r.test(s))

console.log(r.exec(r));