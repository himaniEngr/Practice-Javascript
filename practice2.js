// // fruits = ['apples', 'mangoes', 'bananas'];
// // fruits.forEach(function (fruit) {
// //     a = JSON.stringify(fruit)
// //     console.log(a, typeof (a), fruit);
// // });

// // for (let index in fruits) {
// //     console.log(fruits[index]);
// // }

// // forEach-runs a function on the Elements of array
// //for in - iterates through index values of an array

// console.log('this is tutorial 37');
// students = [{ name: "Rohit", subject: 'JavaScript' }, { name: 'Mohan', subject: 'Java' }];

// function enrollStudent(student) {
//     setTimeout(
//         function () {
//             students.push(student);
//             console.log('student is enrolled')
//             getStudents();
//         }, 3000)
// }

// function getStudents() {
//     setTimeout(function () {
//         str = '';
//         students.forEach(function (student) {
//             str += `<li>${student.name}</li>`;
//         })
//         console.log('students are fetched');
//         document.getElementById('students').innerHTML = str;
//     }
//         , 1000)

// }
// newStudent = { name: 'Nikhil', subject: 'Python' };
// enrollStudent(newStudent);

// // getStudents();


function greeting(name) {
    alert(`Good Morning ${name}`);
}

function getUserInput(func) {
    var name = prompt('Enter your name.');
    func(name);
}
getUserInput(greeting);































