// Namota project 

var num = +process.argv[2];
if(!Number.isInteger(num)){
    console.log("Given Input is not a number !");
    process.exit();
}
else{
    for(var i = 1; i<=10; i++){
        console.log(`${num} X ${i} = ${i*num}`)
    }
}