console.log('tutorial 57');
//maps in javascript- we can use any type of key or value viz. function,string,object etc.
const myMap = new Map();  // empty map
console.log(myMap);
const key1 = 'mystr', key2 = {}, key3 = function () { };
//setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is an blank object');
myMap.set(key3, 'This is a empty function');

//getting values
const value1 = myMap.get(key1);
const value2 = myMap.get(key2);
const value3 = myMap.get(key3);
console.log(value1, value2, value3);

console.log(myMap.size);

for (let [key, value] of myMap) {
    console.log(key, value);
}

//loop through map using for each
myMap.forEach((value, key) => {
    console.log(key);
    console.log(value);
})

const myArr = Array.from(myMap);
console.log(myArr);

const mykeysArr = Array.from(myMap.keys());
console.log(mykeysArr);

const myValuesArr = Array.from(myMap.values());
console.log(myValuesArr);








