// 1 2 fizz 4 buzz 6 . . . 13, 14, FizzBuzz

// loop 1-100
// i % 3 == 0 -> Fizz
// i % 5 == 0 -> Buzz
// i % 3 == 0 && i % 5 == 0 -> FizzBuzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

// let fizzBuzz = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         fizzBuzz.push(i);
//     }
// }

// console.log(fizzBuzz);

// let num1 = 10;
// let num2 = 10;

// if (num1 > num2) {
//     console.log('Num1 is greater than Num2');
// } else if (num2 > num1) {
//     console.log('Num2 is greater than Num1');
// } else {
//     console.log('Num1 is equal to Num2');
// }

// let date = new Date().getDay();

// switch (date) {
//     case 0:
//         console.log('Sunday');
//     // break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Nothing matched');
//     // break;
// }

// if (date == 0) {
//     console.log('Sunday');
// } else if (date == 1) {
//     console.log('Monday');
// } else if (date == 2) {
//     console.log('Tuesday');
// } else if (date == 3) {
//     console.log('Wednesday');
// } else if (date == 4) {
//     console.log('Thursday');
// } else if (date == 5) {
//     console.log('Friday');
// } else if (date == 6) {
//     console.log('Saturday');
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log('i: ' + i + ' j: ' + j);
//     }
// }

// let person = [
//     ['Setu', 'Manikganj', 93],
//     ['John', 'Dhaka', 23],
//     ['Jane', 'England', 34],
// ];

// for (let row = 0; row < person.length; row++) {
//     for (let col = 0; col < person[row].length; col++) {
//         console.log(person[row][col]);
//     }
// }

// for (let i = 0; i < person.length; i++) {
//     for (let j = 0; j < person[i].length; j++) {
//         console.log(person[i][j]);
//     }
// }

// i = row, j = col

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         for (k = 0; k < 5; k++) {
//             console.log('i: ' + i + ' j: ' + j + ' k: ' + k);
//         }
//     }
// }

// let rand = Math.round(Math.random() * 100);

// console.log(rand);

// let num = 1;

// if (num--) {
//     console.log(num);
// }
