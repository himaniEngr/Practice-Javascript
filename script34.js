console.log('this is asynchronous programming');

setTimeout(function () {
    for (let index = 0; index < 4500; index++) {
        const element = index;
        console.log(element);

    }
}, 10000);


console.log('our task is done.')