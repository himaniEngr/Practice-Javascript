console.log('Tutorial 60');
[a, b] = [1, 2];
[x, y, z, ...u] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(a, b, x, y, z, u);



({ s, t, u } = { s: 34, t: 45, u: 89, v: 56, w: 23 });
console.log(s, t, u);

const fruits = ['apples', 'mangoes', 'bananas'];
[l, m, n] = fruits;
console.log(l, m, n);

const fruits2 = ['apples', 'mangoes', 'bananas', 'kiwi'];
[l, m, ...n] = fruits2;
console.log(l, m, n);

const laptop = {
    name: 'latop',
    brand: 'hp',
    price: 50000,
    start: function () {
        console.log('started');

    }
}
const { name1, brand, price,start } = laptop;
console.log(name1, brand, price, start);





