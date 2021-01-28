function add (a, b){
    console.log(this); ///"this" is an chengeable immidiate keyword. 
    console.log(a);
    console.log(b);
}
var d = add.bind(1);
console.log("========== 1st Print =========");
console.log(d(10,11))

console.log("========== 2nd Print =========");
var d = add.call(10,20,30);

console.log("========== 3rd Print =========");
var d = add.apply(11,[2,3]);

console.log("========== 4th Print =========");
add(7,10)
// console.log(add(10,20))