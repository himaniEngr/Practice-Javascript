console.log('This is tutorial 42- fetch api');
let content = document.getElementById('content');
let myBtn = document.getElementById('myBtn');

function postData() {
    url = 'http://localhost:8000/create';
    data = {
        first_name: "himani moto",
        last_name: "moto@moti.com",
    }
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then(response => response.json())
        .then(data => console.log(data)
        )

}
// getData();

// function postData() {
//     url = 'http://dummy.restapiexample.com/api/v1/create';
//     fetch(url).then(response => response.json())
//         .then(data => console.log(data));

// }
postData();
