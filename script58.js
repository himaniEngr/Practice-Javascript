console.log('tutorial 58');
//set stores unique valurs

const mySet = new Set() //initialize an empty set
console.log(mySet);
mySet.add('this');
mySet.add('is tutorial');
mySet.add('this');
mySet.add('that');
mySet.add(4565);
mySet.add(true);
mySet.add({});
console.log(mySet);

//use constructor to initialize set
obj1 = { 1: 'yes', 2: 'no' }
const mySet2 = new Set([1, 45, 'this', true, obj1, 'this'])
console.log(mySet2);
console.log(mySet2.size);

console.log(mySet2.has(45)); //object not working
console.log('before removal', mySet2.has(obj1), mySet2);
//mySet2.delete(obj1)
console.log('after removal', mySet2.has(obj1), mySet2);

mySet2.add({ 1: 'yes', 2: 'no' });
console.log(mySet2.has(obj1));


// var set1 = new Set();
// var obj1 = {'key1': 1};
// set1.add(obj1);

// set1.has(obj1);        // returns true
// set1.has({'key1': 1}); // returns false because they are different object references
// set1.add({'key1': 1}); // now set1 contains 2 entries


//iterating set
for (let item of mySet2) {
    console.log('Item is : ', item);
}
mySet2.forEach((item) => console.log('Iten is : ', item))

myArray = Array.from(mySet2);
console.log(myArray);


