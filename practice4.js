function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            err = true;
            if (!err) {
                console.log('No error');
                resolve();

            }
            else {
                console.log('error occurred');
                reject(err);
            }
        }
            , 1000)
    }
    )
}

func1().then(function () {
    console.log('pass');
}).catch(function () {
    console.log('Fail');

})
















