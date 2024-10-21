// // map, filter, every, some, sort, reduce

// // let arr = [1, 2, 3, 4, 5];

// // let newArr = arr.map((element) => element * 2);

// // console.log(newArr);

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// // Get an array of all names

// let allNames = characters.map((character) => character.name);
// // console.log(allNames);

// // Get an array of all heights
// let allHeight = characters.map((character) => character.height);

// // console.log(allHeight);

// // Get an array of objects with just name and height properties
// let newArrWithNameAndHeight = characters.map(function (character) {
//     return {
//         name: character.name,
//         height: character.height,
//     };
// });

// // console.log(newArrWithNameAndHeight);

// // Get an array of all first names

// let firstName = characters.map(function (character) {
//     return character.name.split(' ')[0];
// });

// console.log(firstName);

// let nums = [1, 2, 3, 4, 5, 6];

// let evenNums = nums.filter(function (num) {
//     return num % 2 == 0;
// });

// console.log(evenNums);

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// Does every character have blue eyes?
// let hasBlueEyes = characters.every(function (character) {
//     return character.eye_color == 'blue' && character.gender == 'male';
// });

// console.log(hasBlueEyes);

// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?

// map -> same number of elements like main array (ARRAY)
// filter -> condition based elements (ARRAY)
// every, some -> Boolean

// Get characters with mass greater than 100
// let greaterThan100 = characters.filter((character) => character.mass > 100);

// console.log(greaterThan100);

// Get characters with height less than 200
// Get all male characters
// let allMale = characters.filter((character) => character.gender == 'male');

// console.log(allMale);
// Get all female characters

// let nums = [2, 4, 6, 8, 10, 1];

// let isEven = nums.some(function (num) {
//     return num % 2 == 0;
// });

// every ->  all true -> true
// some -> at least ekta true -> true

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 != 0) {
//         isEven = false;
//         break;
//     } else {
//         isEven = true;
//     }
// }

// console.log(isEven);

// let nums = [12, 12, 234, 45, 232, 452, 123, 52, 3, 23];

// nums.sort(function (a, b) {
//     return b - a;
// });

// negative -> a age boshe, b pore boshe
// zero -> jemon ache temon e thakbe
// positive -> b age boshe, a pore boshe

// console.log(nums);

// https://github.com/jamesqquick/javascript-array-functions-practice

// let nums = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
// }

// console.log(result);

// let result = nums.reduce(function (acc, element) {
//     return (acc += element);
// }, 10);

// console.log(result);

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// Get the total mass of all characters
// let totalMass = characters.reduce(function (acc, character) {
//     return (acc += Number(character.mass));
// }, 0);

// console.log(totalMass);

// Get the total height of all characters
// Get the total number of characters in all the character names
// let totalChar = characters.reduce(function (acc, character) {
//     return (acc += character.name.length);
// }, 0);

// console.log(totalChar);

// Get the total number of characters by eye color (hint. a map of eye color to count)

// let charByEyeColor = characters.reduce(function (acc, character) {
//     if (acc[character.eye_color]) {
//         acc[character.eye_color]++;
//     } else {
//         acc[character.eye_color] = 1;
//     }
//     return acc;
// }, {});

// console.log(charByEyeColor);

// acc.blue = 1;

// {
//     blue: 2;
// }

// character.eye_color
// character['eye_color']

// let nums = [1, 2, 3];

// let result = nums.reduce(function (acc, el) {
//     return acc;
// }, {});

// console.log(result);

// let str = 'Hello World';

// let result = str.split('').reduce(function (acc, val) {
//     if (val != ' ') {
//         if (acc[val]) {
//             acc[val]++;
//         } else {
//             acc[val] = 1;
//         }
//     }
//     return acc;
// }, {});

// console.log(result);

// reducer(arr, initialval)
