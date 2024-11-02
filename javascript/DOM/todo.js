const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputVal = inputs[0].value;

    const listItem = document.createElement('li');
    listItem.textContent = inputVal;

    ul.append(listItem);
});

// const newListItem = document.createElement('h1');
// newListItem.textContent = 'Hello World';
// div.append(newListItem);
