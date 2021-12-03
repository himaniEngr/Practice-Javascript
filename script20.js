//localStorage.setItem('name', 'harry');
let val = localStorage.getItem('key');
console.log(val);

//localStorage.setItem('movie', 'mystery');

// localStorage.setItem('name2', 'potter');

//localStorage.removeItem('movie');
//localStorage.clear();

let impArray = ['apple', 'mango', 'banana', 'kiwi'];

//localStorage.setItem('fruits', JSON.stringify(impArray));

let fruitsGroup = JSON.parse(localStorage.getItem('fruits'));
console.log(fruitsGroup);



// sessionStorage.setItem('sessionname', 's_harry');
// sessionStorage.setItem('sessionmovie', 's_mystery'); sessionStorage.setItem('sessionname2', 's_potter');
// sessionStorage.setItem('fruits', JSON.stringify(impArray));
