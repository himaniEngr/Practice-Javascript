'use strict'
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i

var string1 = 'Hi Javascript!'
var string2 = 'How are you?'
string2 = string1.concat(string2, 'Are you fine?');
console.log(string2);

console.log(string2.indexOf('How', 0));
console.log(string2.lastIndexOf('you'), string2.indexOf('you'));

//slice -This method returns a substring of the string based on the "start" and "end" index 
var string3 = 'programming in javascript';
var string4 = string3.slice(2, 6);
console.log(string4);

//delimiter

var string5 = 'a,b,c,d,e,f';
var dlm = ',';
console.log(string5.split(dlm)); //returns array ['a', 'b', 'c', 'd', 'e', 'f']

var string6 = string3.substring(2, 6);
// var arr = [1, 2, 3, 4, 5]
// console.log(arr.substring(1, 4));
console.log(string6);

// conversion to lowercase -doesnot change original string
var string7 = 'PROGRAMMING';
console.log(string7.toLowerCase());

var string8 = 'observation skills';
console.log(string8.toUpperCase());

var string9 = 'Welcome to programming!';
var str = string9.search('programming');
console.log(str, typeof str);

var string10 = 'Apple,banana,kiwi';
console.log(string10.substr(3, 8));
//substr(number,length)


console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>" +
    "<p> this is My para</p>";

html = html.concat('this', ' str2', ' str3');
console.log(html);

// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
console.log(html.substring(1, 8));
console.log(html.slice(1, 8))
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3))
//slice (start number, end number) of string
//array has slice not substring. but string can use both for same purpose.

console.log(html.split('>'));
//The split() method splits a string into an array of substrings based on separator.
console.log(html);

// console.log(html.replace('this', 'it'));

let x=html.charAt(5) ; //character at index 5
console.log(x);

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML = myHtml;

// var string10 =
