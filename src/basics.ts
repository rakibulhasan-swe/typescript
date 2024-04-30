console.log("Hello World!!");
console.log("Started My Typescript Journey");

// data types in ts
const age: number = 10;
console.log(age);

let myName: string = "Md. Rakibul Hasan";
// myName = 112; // number is not assignable to a string
console.log(myName);

let isStudent: boolean = true;
console.log(isStudent);

let anyType; // by default it is any type. I can assign any value to this variable
anyType = "Rakib";
anyType = 21;
// console.log(anyType)

let allType: number | string | boolean | undefined | null; // i can decalre a variable using any number of types

// arrays -
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((n) => console.log(n.toExponential(5)));

// tuples - Fixed length array
let user: [number, string] = [1, "Saim"];

// enums - object like syntax - using enums we can represents related constant data
const small = "S";
const large = "L";
const medium = "M";

enum Size {
  small,
  medium,
  large,
}
/* 
{
    '0': 'small',
    '1': 'medium',
    '2': 'large',
    small: 0,
    medium: 1,
    large: 2
}
*/
let smallSize: Size = Size.small;
let largeSize: Size = Size.large;
console.log(Size);
console.log(smallSize);
console.log(largeSize);
