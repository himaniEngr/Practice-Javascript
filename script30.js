console.log('this is tutorial 30');

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

const harry = Object.create(proto); //created object using protoType

harry.name = "Harry";   //adding 'name'
harry.role = 'Programmer'; //adding 'role
console.log(harry);
console.log(harry.slogan());

//changing name using changeName
harry.changeName('harry2');
console.log(harry);


//this also creates 'harry' object
const harry1 = Object.create(proto, {
    name: { value: 'harry', writable: true },
    role: { value: 'programmer' },

})
console.log(harry1);
harry1.changeName('harry3');
console.log(harry1);

//Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.slogan = function () {
    return `This company is the best. 
    Regards, ${this.name}`;
}

let HarryObj = new Employee('Riha', 200, 1);
console.log(HarryObj);
console.log(HarryObj.slogan());

//programmer

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

let prObj = new Programmer('Rohan', 500, 1, 'java');
console.log(prObj);

//inherit prototype
Programmer.prototype = Object.create(Employee.prototype);
let prObj1 = new Programmer('Sohan', 500, 1, 'java');
console.log(prObj1, prObj1.slogan());

//manually set the constructor

Programmer.prototype.constructor=Programmer;
let prObj2 = new Programmer('Wohan', 500, 1, 'java');
console.log(prObj2, prObj2.slogan());















































