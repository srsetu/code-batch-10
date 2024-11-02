// const form = document.querySelector('form');
// const inputs = document.querySelectorAll('input');
// const span = document.querySelector('span');
// const select = document.querySelector('select');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     let emailVal = inputs[1].value;
//     span.textContent = emailVal;
// });

// // inputs[0].style.color = 'red';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');
const span = document.querySelector('span');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let num1 = Number(inputs[0].value);
    let num2 = Number(inputs[1].value);
    let operator = select.value;

    switch (operator) {
        case '+':
            span.textContent = num1 + num2;
            break;
        case '-':
            span.textContent = num1 - num2;
            break;
        case '*':
            span.textContent = num1 * num2;
            break;
        case '/':
            span.textContent = num1 / num2;
            break;
    }
});
