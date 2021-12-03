console.log('Tutorial 53 generators');

//generator function
function* myGenerator() {
    yield 1;
    yield 2;
}

let iterator = myGenerator();
let result;
do {
    result = iterator.next();
    console.log(result.value, result);

} while (!result.done)

//number generator

function* numGenerator() {
    let i = 0;

    while (true) {
        yield i++;
    }
}
const gen = numGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);