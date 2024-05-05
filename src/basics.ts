console.log("Hello World!!");
console.log("Started My Typescript Journey");

// data types in ts
const age: number = 10;
console.log(age);

// const bigInteger: bigint = 0n;

let myName: string = "Md. Rakibul Hasan";
// myName = 112; // number is not assignable to a string
console.log(myName);

let isStudent: boolean = true;
console.log(isStudent);

let anyType; // by default it is any type. I can assign any value to this variable
anyType = "Rakib";
anyType = 21;
// console.log(anyType)

let student: undefined = undefined;

let allType: number | string | boolean | undefined | null; // i can decalre a variable using any number of types

// arrays -
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((n) => console.log(n.toExponential(5)));

// tuples - Fixed length array - follows the order of the types
let user: [number, string] = [1, "Saim"];
let rgb: [number, number, number];
rgb = [0, 0, 0];


export {}
