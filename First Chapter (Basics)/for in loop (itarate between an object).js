// it is valid for only coustom object creation 

var abir = {
    name: 'Abir Hasan',
    age: '22',
    gender: 'Male',
    homeTown: 'Sirajganj',
    state: '359/2 -> Mirpur, Shawrapara'
}

for(var item in abir){ // item = temp variable, 'in' assign abir to item per item 
    console.log(`My ${item} is ${abir[item]}`)
}