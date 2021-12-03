'use strict';
let element = document.createElement('li');
let text = document.createTextNode('Text content of text node');
element.appendChild(text);

element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul, element);

// let elem2 = document.createElement('h1');
// let textelem2 = document.createTextNode('Second created text node.')
// elem2.appendChild(textelem2);
// elem2.setAttribute('title', 'myElem2title');
// elem2.id = 'createdUi'
// elem2.className = 'childul';
// console.log(elem2);
// //replace element
// element.replaceWith(elem2);
// // replace child element of a parent node
// let myul = document.getElementById('listele');
// myul.replaceChild(element, document.getElementById('childele'));

// myul.removeChild(document.getElementById('lui'));

// //get attributes of element

// let cls = element.getAttribute('class');
// console.log(cls);
// console.log(element.hasAttribute('id'));

// element.setAttribute('id', 'newId');
// // element.id='newId';

// //remove attribute of element
// console.log(element.getAttribute('id'));
// element.removeAttribute('id');
// console.log(element.hasAttribute('id'));
// console.log(element);





















