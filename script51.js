console.log('tutorial 51 -iterators');

function fruitsIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }

        }
    }
}

myArray = ['apples', 'mangoes', 'bananas', 'chikoo'];
console.log(myArray);
let obj = fruitsIterator(myArray)
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);


