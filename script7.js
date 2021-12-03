var i = 0;
var html = '';
html += `<h1>Programming basics Part ${i + 1} </h1>`;



//arrays
let arr = ['apple', 'mango', 'banana'];
for (let i = 0; i < 3; i++) {
    console.log(arr[i]);
    html += arr[i] + ',';
}



document.body.innerHTML = html;


console.log(arr.length);

let age = [23, 45, 22, 11, 63];
let s_age = age.sort();
console.log(s_age, age);

let rev_age = age.reverse();
console.log(rev_age, age);

//both reverse and sort change original array 


alpha = ['a', 'b', 'c'];
numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);

//push-insertion at end
let fruits = ['apple', 'mango', 'banana'];
let newlength = fruits.push('Strawberries');
console.log(fruits, typeof newlength);

//pop -deletion at end

poppedElement = fruits.pop();
console.log(poppedElement, fruits);

// unshift-insertion in beginning
newlength = fruits.unshift('strawberries');
console.log(newlength, fruits);

//shift-deletion in the beginning
shiftedElement = fruits.shift();
console.log(shiftedElement, fruits);

console.log(Array.isArray(['dfdf', 'abab']));

let myobj = { 'channel': 'youtube', 'name': 'classTeacher', 'marks': 123 }
console.log(myobj['channel'], myobj.name)
//console.log(myobj.reverse()) - not a function


document.body.innerHTML = '<div>hello</div>'



console.log(Array.isArray(fruits));

console.log(Array.isArray('fruits'));

//updating array element
fruits[0]='chikoo';
console.log(fruits);

console.log(fruits.indexOf('banana'));
let arr1=[1,2,3,45,56,78,4,34];
console.log(arr1.splice(2,5)); //deletes elements from array and returns deleted elements

let arr2=[45,56,34,68,24];
console.log(arr1);
arr1=arr1.concat(arr2);
console.log(arr1);
