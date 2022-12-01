/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);
let age = 19;

console.log('Tharun');
console.log(23);
//sample java script
let firstname = 'Tharun';
let first = 'Prasath';
console.log(firstname);
/*
....
first js code
....


let statu = true;
console.log(statu);

console.log(typeof true);
console.log(typeof statu);
console.log(typeof first);
console.log(typeof age);

statu = 'YES!'

console.log(typeof statu);

let year;
console.log(typeof year);

console.log(typeof null);

console.log();
console.log();

*/

/*let age = 30;
age = 31; //reassigning or mutating the varaiable

let year; //empty variable

const birthyear = 1991;
//const birth; const cannot be a empty variable

var job = 'programmer';
job = 'teacher';//not in use

lastname = 'sathyamoorthy';
console.log(lastname);


//arithmetic operators
const now = 2022;
const age_tharagesh = now - 2003;
const age_tharun = now - 2007;
console.log(age_tharagesh, age_tharun);

console.log(age_tharagesh * 2, age_tharun / 10, 2 ** 3);
//2 ** 3 means 2 power of 3 = 2*2*2

const firstname = 'Tharageshwaran';
const lastname = 'Sathyamoorthy';
const space = ' ';
console.log(firstname + space + lastname);

//assignment operators
let x = 20 + 5;//25
x += 10;// x = x + 10 = 35
x *= 4; //x = x*4 = 140
x++; // x = x + 1 = 141
x--;//x=140
x--;//x=139
console.log(x);

//comparison operators
console.log(age_tharagesh > age_tharun);// >, <, >=, <=
console.log(age_tharun >= 18);

const isFullAge = age_tharun >= 18;
console.log(isFullAge);

console.log(now - 2003 > now - 2007);


const now = 2022;
const age_tharagesh = now - 2003;
const age_tharun = now - 2007;

console.log(now - 2003 > now - 2007);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (age_tharun + age_tharagesh) / 2;
console.log(age_tharagesh, age_tharun, averageAge);
*/

// const firstname = 'Tharun';
// const job = 'student';
// const birthYear = 2007;
// const year = 2022;

// const Tharun = "I'm " + firstname + ", a " + (year - 2007) + " years old " + job;

// console.log(Tharun);

// //template string := `` most used ES6 feature

// const tharunNew = `I'm ${firstname}, a ${year - birthYear} year old ${job}`;

// console.log(tharunNew);

// console.log(`Just the same as regular striing...`);

// console.log('string with \n\
// multiple \n\
// lines');

// console.log(`strings with
// multiple
// lines`);

// var age = prompt('Enter your age:', '19');

// if (age >= 18) {
//     console.log('🚗You Can Drive');
// }
// else {
//     const yearsleft = 18 - age;
//     console.log('❌You Cannot Drive');
//     console.log(`Wait another ${yearsleft} years :)`)
// }

// const birthYear = 2003;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = '1991';
// console.log(inputYear + 18);

// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Tharun'));
// console.log(String(23));

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);

// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1;
// console.log(n);
// n = n - 1;
// console.log(n);

//5 falsy values : 0, '', undefined, null, NaN
//all others are truthy values

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean('Tharun'));
// console.log(Boolean({}))

// const money = 0;
// if (money) {
//     console.log("Don't spend it all :)");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log("Height is defined");
// } else {
//     console.log("Height is UNDEFINED");
// }

// const hasLicense = true;
// const hasGoodVision = true;

// console.log(hasLicense && hasGoodVision);
// console.log(hasLicense || hasGoodVision);
// console.log(!hasLicense);

// const shouldDrive = hasLicense && hasGoodVision;

// if (hasLicense && hasGoodVision) {
//     console.log('Able to drive');
// }
// else {
//     console.log('Could not drive');
// }

// const isTired = true;
// console.log(hasLicense && hasGoodVision || isTired);

// if (hasLicense && hasGoodVision && !isTired) {
//     console.log('Able to drive');
// }
// else {
//     console.log('Could not drive');
// }

// const day = "monday";

// switch (day) {
//     case 'monday':
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples");
//         break;
//     case 'friday':
//         console.log("Record videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the wekend :D");
//         break;
//     default:
//         console.log("Not a valid day");
// }

// if (day === 'monday') {
//     console.log('Working day');
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === 'tuesday') {
//     console.log('Home work');
//     console.log("Prepare theory videos");
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Worsheet');
//     console.log("Write code examples");
// } else if (day === 'friday') {
//     console.log('March fast');
//     console.log("Record videos");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
//     console.log("Enjoy the wekend :D");
// } else {
//     console.log('Not a valid day!');
// }

//statement and expression
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// const me = 'Tharun'
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// const age = 23;
// //age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// //or

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
