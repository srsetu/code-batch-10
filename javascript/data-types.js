/**
 * String
 * Number
 * Boolean
 * BigInt - ES2020
 * Undefined
 * Null
 * Symbol -> ES6
 * Object
 */

// String

// let myName = '';

// console.log(typeof myName);

// Number

// short 16 bit, int 32 bit, float 64 bit

// let num = 23.2342;

// console.log(Math.ceil(num));

// Boolean
// let bool = false;

// console.log(typeof bool);

// undefined
// let myName;

// console.log(typeof myName);

// null

// let nothing = null;

// console.log(typeof nothing);

// Object

// let names = {
//     a: 'Name',
//     b: 'Just anything',
// };

// console.log(typeof names);

// String(), Number(), Boolean()

// let numAsString = Number('10') + Number('20');

// let newNum = Number(numAsString);

// console.log(numAsString);

// Boolean
// 0, -0, 0n, NaN, undefined, null, ''

// console.log(Boolean(Number(NaN)));

let result = String(Boolean(20 + String(20))) + 1;
// result = true + 'hello';
// 2020hello???40hello
// RESULT = 20 + NaN -> NaN
console.log(result);
