console.log('tutorial 28');

//object literal starts(inherits) from object.prototype
let obj = {
    name: 'Harry',
    channel: 'Code with Harry',
    address: 'Mars'
};
console.log(obj);

//constructor -means creating new prototype using Obj.prototype'

function Obj(givenName) {
    this.name = givenName;
}

//function to be added in object prototype
Obj.prototype.getName = function () {
    return this.name;
}
Obj.prototype.setName = function (newName) {
    this.name = newName;
}

let obj2 = new Obj('Michelle');
console.log(obj2, obj2.toString(), typeof obj2.toString());


//when we create object using object literal, it inherits from object.prototype
//when we create new constructor, object inherits from newly created constructor's prototype.