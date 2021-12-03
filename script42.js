console.log('This is tutorial 42- fetch api');
let content = document.getElementById('content');
let myBtn = document.getElementById('myBtn');

function getData() {
    url = 'sample.txt';
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);

    });

}
getData();