console.log(process.argv) //print 2 value as an array
                            // 1st is node application location and
                            // 2nd is your runnig file directory location

let x = parseInt(process.argv[2]); //here normally return a string so use parseInt for convert to number
let y = parseInt(process.argv[3]); //here normally return a string so use parseInt for convert to number

console.log("Sum is: ",x+y)
console.log("Diffrence is: ",x-y)
console.log("Divided is: ",x/y)
console.log("Multiply is: ",x*y)
console.log("Remainder is: ",x%y)
