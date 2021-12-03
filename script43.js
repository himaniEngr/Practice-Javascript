console.log('This is tutorial 43');
async function harry() {
    console.log('Inside Harry');
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
    // return 'Harry'
}
// console.log('Before calling Harry');
let a = harry();
// console.log('After calling Harry');
// console.log('Last line of code');
a.then(data => console.log(data));

