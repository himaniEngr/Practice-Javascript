console.log('this is tutorial 37');
students = [{ name: "Rohit", subject: 'JavaScript' }, { name: 'Mohan', subject: 'Java' }];

function enrollStudent(student, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(
            function () {
                students.push(student);
                console.log('student is enrolled')
                const error = false;
                if (!error) {
                    resolve();
                }
                else {
                    reject();
                }
                // callback();
            }, 3000);
    })

}

function getStudents() {
    setTimeout(function () {
        str = '';
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`;
        })
        console.log('students are fetched');
        document.getElementById('students').innerHTML = str;
    }
        , 1000)

}
newStudent = { name: 'Nikhil', subject: 'Python' };
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log('An error occurred.');
});

// getStudents();

//function inside then is resolve
//function inside catch is reject