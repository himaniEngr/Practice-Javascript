'use strict';

//for in loop
var person = { name: 'Harry', language: 'javascript', age: 27 }
for (var i in person) {
    console.log(`${i} = ${person[i]}`)
}

//for each loop

var alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
    console.log(alpha[i]);
}

//continue statement-skipping an iteration

for (let j = 0; j < 10; j++) {
    if (j == 5) {
        continue;
    }
    // j = j * 2;
    console.log(j+1);
}


