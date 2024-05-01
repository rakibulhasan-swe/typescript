# TypeScript

### Typescript is a object oriented programming language which is built on top of JS, It is a superset of Javascript. Every valid Javascript program is a valid Typescript program. Eventually Typecsript code converted into Javascript.

## Benefits of using Typescript
- Type safety (analyze the code as we type. which can catch errors during development and provide better tooling support in code editors.)
- New features
- Shorthand notations
- Increase productivity
- Less bugs so less testing

## Cons of TS
- Compilation/Transpilation. (Browsers dont understand TS code. So it transpiled into JS code)
- Writing more code. (Type complexities. Have to write more code).
- Limited library support.

## Data Types in TS
- Number
```ts
const age: number = 10;
console.log(age);
```
- String
```ts
let myName: string = "Md. Rakibul Hasan";
console.log(myName);
```
- Boolean
```ts
let isStudent: boolean = true;
console.log(isStudent);
```
- undefined
```ts
let student: undefined = undefined;
```
- Null
```ts
let loggin: null = null;
console.log(loggin);
```
- Object
- Array
- any (If i not initialized any value to a variable it will be any type. I can store any types of value to this variable)
```ts
let loggin;
loggin = true;
loggin = 112;
login = "Typescript";
```
- unknown (I do not know the type but will know the type in runtime)
- never
- enum
- tuple
- union