console.log('CodeWithHarry');
console.log(1);
console.log(true);
console.log(null);;
console.log([1, 2, 3]); // array inside log
console.log({ name: "Harry", language: "JavaScript", tutorial: 2 });

console.table({ name: "Harry", language: "JavaScript", tutorial: 2 });

console.assert(0 > 1, "Expression is false");

console.warn("This is a warning");

// console.clear();

console.time();
for (i = 0; i < 100; i++) {
    // code
}
console.timeEnd();

console.error("This is a simple error");

for (i = 0; i < 4; i++) {

    for (j = 0; j < 4; j++) {
        console.count(i);   //number of times a function encounters a particular value
        //console.log(i);
    }
}


//The console.group() method indicates the start of a message group.


console.group();
console.log('Inside a  group');
console.log('Again inside a group');
console.group('End of group')
console.groupEnd();

//The console.groupCollapsed() method indicates the start of a collapsed message group.
console.groupCollapsed();
console.log('Inside a collapsed group');
console.log('Again inside a collapsed group');
console.group('End of collapsed group')
console.groupEnd();

// custom console logs

const spacing = '8px';
const mystyle = `padding: ${spacing}; background-color: white; color: blue ; font-style:italic; border: 1px solid black dotted; font-size: 2em;`;
console.log('%cCode With Harry', mystyle);