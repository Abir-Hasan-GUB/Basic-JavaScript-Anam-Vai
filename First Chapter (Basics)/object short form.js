var test ={
    name: 'test',
    type: 'object',
    live(){
        console.log(`${this.name} Object live now ! `);
    }
}

var x = test.live;
console.log(x()) // here can't get this property bcz of call by reffarance

console.log(x.call(test)); // here get this property bcz of we set 'this' valu by 'call' function.