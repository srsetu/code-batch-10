const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let randomNum = Math.ceil(Math.random() * 5);
    let num = Number(inputs[0].value);

    if (randomNum == num) {
        h2.textContent = 'Congratulations! You guess the right number';
    } else if (randomNum != num) {
        h2.textContent = `You guessed the wrong number. Right number is ${randomNum}`;
    }
});
