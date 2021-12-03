let salary = 1001;
if (salary === 1000) {
    console.log('Salary is equal to thousand');
}
else if (salary < 1000) {
    console.log('Salary is less than thousand.');
}
else {
    console.log('Salary is greater than thousand.')
}

let relation = salary > 1000 ? "greater" : "not greater";
console.log(`Salary is ${relation} than thousand.`);

let a = 9, c = 8;
let b = 4;
switch (a + b) {
    case 10:
        console.log('Sum of numbers is 10');
        break;
    case 18:
        console.log('Sum of numbers is 18');
        break;
    default:
        console.log('Sum is neither 10 nor 18');
}

var notDefine;
if (typeof notDefine === 'undefined') {
    console.log('notDefine is undefined');
}