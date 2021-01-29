var parents = {
    name: "AB. Rahim",
    mobile: 'Samsung'
}

var child = Object(parents); // inherit 'parents' object by child
console.log(child) // show all parent elements here

parents.age = 63;
console.log(child) // auto upate elements list after add new on parents obj.

console.log(child.name) // print name of parents obj bcz of inherit
console.log(child.hasOwnProperty('name')); //check own property of obj.

child.name = 'Abir Hasan'; // add new name property on child (precedency high)
console.log(child.name) // print name of child obj bcz of precidency