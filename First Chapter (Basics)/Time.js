let time = new Date();
console.log(time)
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getMonth())
console.log(time.getSeconds())
console.log(time.getUTCDate())
console.log(time.getMilliseconds())
console.log(time.getFullYear())
console.log(time.getTime())
console.log(time.getUTCMinutes())

var t = setInterval(()=>{
    console.log("Hello World!");
},1000)
clearInterval(t);

var t = setTimeout(()=>{
    console.log("Hello World!");
},1000)
// clearInterval(t);