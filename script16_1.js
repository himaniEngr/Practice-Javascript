let elem2 = document.createElement('h1');
elem2.className = 'newElement';
elem2.id = 'nwEle';
let txtNode = document.createTextNode('New text heading');
elem2.appendChild(txtNode);
console.log(elem2);
document.body.appendChild(elem2);

//exercise by coewithharry

let elem1 = document.createElement('a');
let txt = document.createTextNode('Go to CodeWithHarry');
elem1.className = 'newclass';
elem1.id = 'newId'
elem1.href = 'https://www.codewithharry.com/'
elem1.appendChild(txt);
console.log(elem1);
document.body.appendChild(elem1);

// let parentEle=document.createElement('a');
// parentEle.setAttribute('href','https://www.codewithharry.com/')
// parentEle.appendChild(elem1);
// console.log(elem1);
