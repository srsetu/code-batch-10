// function sayHello(userName = 'Tamim') {
//     // if (!userName) {
//     //     userName = 'Tamim';
//     // }
//     console.log('Hello ' + userName);
// }

// var -> function scope
// let -> block scope

// sayHello('Setu');
// sayHello('John');
// sayHello('Jane');
// sayHello();

// console.log(name);

// Function Expression
// let jogFol = function (num1, num2) {
//     console.log(num1 + num2);
// };

// Arrow Function
// let biyogFol = (num1, num2) => {
//     console.log(num1 - num2);
// };

// jogFol(5, 10);

// Function Declaration
// function add(num1, num2) {
//     console.log('Hello World');
//     return 'Hello';
// }

// let result1 = add(5, 10);
// let result2 = add(5, 20);

// console.log(result1, result2);

// function addMr(name) {
//     return 'Mr ' + name;
// }

// let userName = 'Setu';

// // console.log(addMr(userName)); // Mr Setu

// let result = addMr('Setu');

// console.log(result);

// function multiplyBy10(num) {
//     let result = num * 10;
//     return result;
// }
// let result = multiplyBy10(30); // 300

// console.log(result);

// function sumOfTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }

// let result = sumOfTwoNumber(5, 10);

// let result2 = sumOfTwoNumber(sumOfTwoNumber(5, 10), 10);

// console.log(result2);

// function sayHello() {
//     console.log('Hello World');
// }

// function anotherSayHello() {
//     sayHello();
// }

// function onceAgainSayHello() {
//     anotherSayHello();
// }

// function callFunction(functionName) {
//     functionName();
// }

// callFunction(onceAgainSayHello);

// sayHello; // function reference
// sayHello(); // function invoke

// function myFunc(num1, num2) {
//     // let num1 = 10;
//     // let num2 = 20;

//     function add() {
//         return num1 + num2;
//     }

//     return add();
// }

// let result = myFunc(10, 20);
// console.log(result);

// console.log(result);

// has parameteres has return
// has parameteres no return
// no parameteres no return
// no parameteres has return

// function return5() {
//     return 5;
// }

function calculator(num1, operation, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

let result = calculator(44, '+', 16);
// console.log(result);

// namta(4) , calculator, bmiCalculator, usdToBDT(), mileToKM(), strikeRate()
/**
 * 4 x 1 = 4
 * 4 x 2 = 8
 * 4 x 3 = 12
 * 4 x 4 = 16
 * ....
 * ....
 * ....
 * 4 x 10 = 40
 *
 */

// function countWord(str) {
//     return str.split(' ').length;
// }

let str = 'Hello World World World';

function replaceAll(str, wordToReplace, newWord) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == wordToReplace) {
            arr[i] = newWord;
        }
    }
    return arr.join(' ');
}

let newStr = replaceAll(str, 'World', 'Jupiter');
console.log(newStr);

// replaceAll('World', 'Jupiter')

// console.log(countWord(str));
