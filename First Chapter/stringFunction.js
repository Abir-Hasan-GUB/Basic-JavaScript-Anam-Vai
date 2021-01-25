let Name = " Abir Hasan ";
let check = Name.charAt(2); //print charectr at a specific position
console.log(check);
console.log(Name.charCodeAt(check)) //print ascci code of a charecter
console.log(Name.indexOf(check)) // search a charecter using index number (only first match charecter)
console.log(Name.match("Ha")) // find match element and return index number

let replace = Name.replace('Abir', 'Nahid'); // replace a string with another string
console.log(replace) // main string still same because we are not replece main string

console.log(Name.toLocaleLowerCase()) // convert to lower case
console.log(Name.toUpperCase()) // convert to uppercase
console.log(Name.length) // print length of string
console.log(Name.trim()) // remove empty space from left and right site of an sentancen
