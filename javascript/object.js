// let str = 'Hello World';
// let names = ['Setu', 'Shakib', 'Tamim'];

// let person = {
//     name: 'Saidur Rahman Setu',
//     age: 99,
//     interest: [
//         'JavaScript',
//         'PHP',
//         'Python',
//         {
//             a: 10,
//             b: 20,
//             c: function () {
//                 console.log('Hello from C');
//             },
//         },
//     ],
//     sayHello: function (userName) {
//         console.log('Hello ', userName);
//     },
// };

// let str = 'sayHello';

// person[str]('Setu');

// console.log(person[str]);

// let str = 'name';

// console.log(person[str]);
// console.log(person['name']);

// delete person.sayHello;

// console.log(person);

// person.location = 'Dhaka';
// person.helloJupiter = function () {
//     console.log('Hello Jupiter');
// };

// person.helloJupiter();

// console.log(person);

// person.interest[3].c();

// console.log(person.interest[3].a);

// person.interest.forEach(function (el) {
//     console.log(el);
// });

// person.name = 'John Doe';

// console.log(person.interest);

// person.sayHello('Setu');

// console.log(person.name);

// this

// let person = {
//     name: 'Shawon',
//     age: 31,
//     sayHello: function () {
//         console.log('Hello ', this.name);
//     },
//     birthYear: function () {
//         let year = new Date().getFullYear();
//         let birthYear = year - this.age;
//         console.log(`Name: ${this.name} and Birthyear: ${birthYear}`);
//     },
// };

// person.birthYear();
// person2.sayHello();

// window object, global object

// console.log(this);

// method -> this == object
// function -> this == window/global

// function myFunc() {
//     console.log(this);
// }

// myFunc();

let person = {
    name: 'Setu',
    interest: ['JavaScript', 'PHP', 'Java'],
    showInterest: function () {
        this.interest.forEach((el) => {
            console.log(`Name: ${this.name} Inetrest: ${el}`);
        });
    },
    showInterest2() {
        this.interest.forEach(function (el) {
            console.log(this.name);
        }, this);
    },
};

person.showInterest2();

// Name: Setu Interest: JavaScript
// Name: Setu Interest: PHP
// Name: Setu Interest: Java
