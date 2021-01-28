/**
 * IIFE is one kind of function
 * It doesn't affect on global scop
 * Most of use on "Plugin devolopment"
 * It is strting can't with function keyword
 * so that before function keyword we place another sign (+/!/())
 */

//  Example 1:

 (function(){
     let x = 5;
     console.log(x);
 }()) // this function return 5 smoothly


 //  Example 2:

 !function(){
    let x = 5;
    console.log(x);
}() // this function return 5 smoothly


//  Example 3:

+function(){
    let x = 5;
    console.log(x);
}() // this function return 5 smoothly


//  Example 4:

/function(){
    let x = 5;
    console.log(x);
}() // this function return 5 smoothly