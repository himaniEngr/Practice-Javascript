'use strict'
console.log('only for checking');
//let a = window.document;
// a = document.all;
// a = document.body;
//  a = document.forms;
// Array.from(a).forEach(function (element) {
//     console.log(element);
// })
// console.log(a);

// let b = document.links;
// console.log(b);


let a = document.all;
Array.from(a).forEach(function (element) {
    console.log(element);
})

let arr = Number([1, 2, 3, 4, 5, 6]); //output is NaN
console.log(arr);

