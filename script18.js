// 'use strict'
// console.log('connected to website');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// function func1(e) {
//     console.log('thanks', e);

//     e.preventDefault(); //to bypass default behavior of submitting and moving to none.html
// }

// btn.addEventListener('dblclick', func2);
// function func2(e) {
//     console.log('thanks it is a double click', e);

//     e.preventDefault(); //to bypass default behavior of submitting and moving to none.html
// }

// btn.addEventListener('mousedown', func3);
// function func3(e) {
//     console.log('thanks it is a mouse-down', e);

//     e.preventDefault(); //to bypass default behavior of submitting and moving to none.html
// }


// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log('You entered no');
// });

// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('You left no');
// });


document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`;      //'red'
    console.log('You triggered mouse-move event.');
});











