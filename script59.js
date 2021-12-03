console.log('tutorial 59');
const sym1 = Symbol('first symbol');
console.log(sym1);
const sym2 = Symbol('first symbol');
console.log(sym1 === sym2);  //unique symbols

const k1 = Symbol('identifier1')
const k2 = Symbol('identifier2')

myObj = {};
myObj[k1] = 'Himani';
myObj[k2] = 'Deepak';
myObj['name'] = 'Good boy'
myObj[4] = true;

console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);   // can not do this to get value . (returns undefined) equals to -myObj['k2']
console.log(myObj);

//Symbols are ignored in for-in loop
for (let key in myObj) {
    console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));

