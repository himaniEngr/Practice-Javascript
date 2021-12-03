console.log('this is tutorial 31');

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and this is the best company.`
    }
    joiningYear() {
        return 2021 - this.experience;
    }

    //you can use static method without creating object
    static add(a, b) {
        return a + b;
    }
}



harry = new Employee('harry', 23, 'Mars');
console.log(harry);
console.log(harry.joiningYear());

console.log(Employee.add(34, 7)); //access without creating object, calling class method


class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, gitHub) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.gitHub = gitHub
    }
    favoriteLanguage() {
        if (this.language == 'python') {
            return 'python';
        }
        else {
            return 'javaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}
rohan = new Programmer('Rohan', 3, 'Lays', 'Go', 'rohan420');
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(3, 8));

























