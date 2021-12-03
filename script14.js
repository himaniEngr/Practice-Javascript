'use strict';
// let element = document.getElementById('myfirst');
// // element=element.className;
// // element=element.childNodes;
// // element=element.parentNode;
// element.style.color = 'red';
// // element.innerText='I changed text.'
// // element.innerHTML='<b>Inner html was changed by me.</b>'
// console.log(element);
// // let qsel=document.querySelector('#myfirst');  
// //selection by id using pound-# symbol
let qsel = document.querySelector('.child1');
console.log(qsel);
qsel.style.color = 'lightgreen';
qsel.innerHTML = '<b>only for testing</b>'


//2.Multi element selector

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
//returns all div tag elements -html collection
console.log(elems);

Array.from(elems).forEach(function (element) {
    console.log(element);
    element.style.color = 'blue';
    element.style.borderBottom = '2px solid red';
})



for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'orange';
}