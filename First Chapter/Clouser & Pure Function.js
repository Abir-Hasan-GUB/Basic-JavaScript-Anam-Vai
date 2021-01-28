// Clouser----
/**
 * Basically clouser is an function inside a function
 * Where a variable is used by inside second or 3rd function from main functon
 * After calling main function there's shared variable doesn't distroy
 * It still alive because of reffer another
 */

 function printName(){
     let name = "Abir Hasan";
     function closer(){
         console.log(name);
     }
     return closer;
 }

 var testFunc = printName();
testFunc()