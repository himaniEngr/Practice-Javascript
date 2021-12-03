'use strict';
document.addEventListener('click', function () {
    console.log('you have clicked on the document');
});
let el = document.getElementById('heading');
el.addEventListener('click', function (e) {
    console.log('you clicked on heading element.');
    console.log(e, e.target, e.target.className);
    console.log(e.target.classList);
    console.log(e.target.id);
    let variableX = e.offsetX;
    let variableY = e.offsetY;
    let x = e.clientX;
    let y = e.clientY;
    console.log(`with respect to element- ${variableX}, ${variableY}`);
    console.log(x, y);

    let variable = Array.from(e.target.classList);
    console.log(variable);
});