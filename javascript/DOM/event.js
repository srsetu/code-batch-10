const title = document.querySelector('h1');
const link = document.querySelector('a');
const input = document.querySelector('input');
const listItems = document.querySelectorAll('li');

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 65:
            title.textContent = 'A';
            break;
        case 66:
            title.textContent = 'B';
            break;
        case 67:
            title.textContent = 'C';
            break;
    }
});

// Event Bubbling, Event Capture

// for (let item of listItems) {
//     item.addEventListener('click', function (event) {
//         event.target.textContent = 'Clicked';
//     });
// }

// title.addEventListener('click', function (event) {
//     console.log(event.target);
// });

// title.addEventListener('dblclick', changeText);

// function changeText() {
//     title.textContent = 'Hello Jupiter';
// }

// link.addEventListener('mouseover', function () {
//     link.style.color = 'tomato';
// });
// link.addEventListener('mouseout', function () {
//     link.style.color = 'blue';
// });
// input.addEventListener('focus', function () {
//     input.style.backgroundColor = 'red';
// });
// input.addEventListener('blur', function () {
//     input.style.backgroundColor = '#fff';
// });

// function sayHello() {
//     console.log('Hello World');
// }
