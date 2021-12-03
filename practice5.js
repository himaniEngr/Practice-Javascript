async function func1() {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;

}

let a = func1();
a.then(data => console.log(data));