console.log(Math.PI);
console.log(Math.LN10);

console.log(Math.max(1,2,3));
console.log(Math.max(1,2,3));
console.log(Math.floor(1.25));
console.log(Math.ceil(1.58));
console.log(Math.round(1.58));

console.log(Math.abs(1.58));
console.log(Math.sin(1.58));
console.log(Math.tan(1.58));
console.log(Math.cos(1.58));

console.log("rand:"+Math.random()); //random kono argiument nei na. valu = >0<1


var array = [1,2,3,4];
var max = Math.max.apply(null, array); //array ke func argument gulo array hisebe dite chaile apply use korte hoi
console.log(max);
