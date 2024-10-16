// let person1 = {
//     name: 'John Doe',
//     age: 99,
//     location: 'London',
//     sayHello() {
//         console.log('Hello');
//     },
// };

// let person2 = {
//     name: 'Jane Doe',
//     age: 49,
//     location: 'Dhaka',
//     sayHello() {
//         console.log('Hello');
//     },
// };

// let person3 = {
//     name: 'John Snow',
//     age: 23,
//     location: 'USA',
//     sayHello() {
//         console.log('Hello');
//     },
// };

// Factory Function
// Constructor Function
// JavaScript Class

// Factory Function

// function createPerson(name, age, location) {
//     return {
//         name,
//         age,
//         location,
//         sayHello() {
//             console.log('Hello');
//         },
//     };
// }

// let person1 = createPerson('John', 99, 'London');
// let person2 = createPerson('Jane', 39, 'Dhaka');
// let person3 = createPerson('John Snow', 23, 'USA');

// console.log(person1);

// Constructor Function

// function Person(name, age, location) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.sayHello = function () {
//         console.log('Hello');
//     };
// }

// let person1 = new Person('John', 99, 'London'); // {}

// console.log(person1);

// class Person {
//     constructor(name, age, location) {
//         this.name = name;
//         this.age = age;
//         this.location = location;
//         this.sayHello = function () {
//             console.log('Hello');
//         };
//     }
// }

// let person1 = new Person('John', 99, 'Dhaka');
// let person2 = new Person('Jane', 23, 'London');

// person2.interest = ['JavaScript', 'PHP', 'Java'];

// console.log(person1);

// Factory Function -> return {}
// Constructor Fucntion -> this.property = value; -> new
// Class -> constructor() -> new

// function add(...nums) {
//     let result = 0;

//     for (let i = 0; i < nums.length; i++) {
//         result += nums[i];
//     }
//     console.log(result);
// }

// let myArr = [5, 10, 30, 34, 1];

// add(...[5, 10, 30, 34, 1]);

// let arr = [1, 2, 3];
// let arr2 = [...arr];

// arr[0] = 5;

// console.log(arr2);
