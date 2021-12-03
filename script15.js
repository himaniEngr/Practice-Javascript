'use strict';
// console.log('this is tutorial 15 practice.');
// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);
// let nodeName = cont.childNodes[3].nodeName;
// console.log(nodeName);

// let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeType);

//NodeTypes
//1. Element
//2. Attribute
//3. Text Node
//8. Comment
//9. document
//10. doctype

let container = document.querySelector('.container');
// console.log(container.children[0].children[0].children;
console.log(container);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(container.lastChild);
console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling.nextSibling);
console.log(container.firstElementChild.nextElementSibling);