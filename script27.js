console.log('tutorial 27');
//object literal for creating objects
let car = {
    name: 'Maruti 800',
    topspeed: 89,
    run: function () {
        console.log('car is running');
    }
}
console.log(car);

//creating a constructor for car
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running.`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topspeed} kmph than Mercedes.`)
    }
}
car1 = new GeneralCar('Nissan', 180);
console.log(car1.name);   //
car1.run();

car2 = new GeneralCar('Maruti 800', 80);
car2.run();
console.log(car2.name, car2.topspeed);
car2.analyze();
