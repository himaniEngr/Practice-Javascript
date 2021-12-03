function func2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            error = false;
            if (!error) {
                console.log('ran successfully');
                resolve();
            }
            else {
                console.log('did not run');
                reject('fail')
            }
        }, 1000)

    })
}
func2().then(function () {
    console.log('Successful');

}).catch(function () {
    console.log('Unsuccessful');

})
