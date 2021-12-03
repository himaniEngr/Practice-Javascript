'use strict';

//function declaration
function print_message(message) {
    console.log(message);
}

print_message('Hello World!');

//function expression

let fun_exp = function (arg) {
    return arg + 'tested';
}
console.log(fun_exp('automatically '));

let sumFun = function (a, b) {
    return a + b;
}
console.log(sumFun(3, 7));

function ui(name) {
    return `This is designed by ${name}`;
}

console.log(ui('harry'));


const myObj = {
    name: 'SkillF',
    game: function () {
        return 'GTA';
    }
}

console.log(myObj.game());

let arr = ['fruits', 'vegetable', 'furniture'];
arr.forEach(function (element, index, array) {
    console.log(element, index);
});




















