// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');
// const divs = document.querySelectorAll('div');

document.addEventListener('click', (e) => {
    if (e.target.matches('div')) {
        console.log('Hello World');
    }
});

const newDiv = document.createElement('div');
newDiv.style.height = '600px';
newDiv.style.width = '600px';
newDiv.style.backgroundColor = 'black';
document.body.append(newDiv);

// grandparent.addEventListener('click', (e) => {
//     console.log('Grandparent Bubble');
// });

// parent.addEventListener('click', (e) => {
//     console.log('Parent Bubble');
// });

// child.addEventListener(
//     'click',
//     (e) => {
//         console.log('Child Bubble');
//     },
//     { once: true }
// );

// document.addEventListener('click', (e) => {
//     console.log('Document Bubble');
// });

// function sayHi() {
//     console.log('Hello World');
// }

// child.addEventListener('click', sayHi);

// setInterval(function () {
//     child.removeEventListener('click', sayHi);
// }, 2000);
