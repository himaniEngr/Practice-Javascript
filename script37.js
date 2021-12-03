console.log('this is tutorial 37');
students = [{ name: "Rohit", subject: 'JavaScript' }, { name: 'Mohan', subject: 'Java' }];

function enrollStudent(student, callback) {
    setTimeout(
        function () {
            students.push(student);
            console.log('student is enrolled')
            callback();
        }, 3000)
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
enrollStudent(newStudent, getStudents);

// getStudents();