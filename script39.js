function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            error = false;
            if (!error) {
                console.log('Ran successfully.');
                resolve();
            }
            else {
                console.log('Unsuccessful');
                reject('It was rejected');

            }
        }, 1000)
    })
}

func1().then(function () {
    console.log('Congratulations!');
}).catch(function (error) {
    console.log('Promise not fulfilled.');

})