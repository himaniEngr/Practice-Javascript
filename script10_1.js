'use strict';
var i = 234;
console.log(i);

{
    let i = 13;
    console.log(i);
}

console.log(i);

//outer i value is changed when both  are var 234-13-13
//let-var is not allowed -throws error (let cannot be redeclared)
//var-let gives scope values 234-13-234

if (true) {
    var j = 15;
    console.log(j);
}

function ui(name) {
    let j = 78;
    console.log(j);
    return `this is a ${name}'s UI.'`
}

console.log(ui('Harry'), j)

//global j will be printed -15 






