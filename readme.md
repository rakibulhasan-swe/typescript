# TypeScript

Typescript is a object oriented programming language which is built on top of JS, It is a superset of Javascript. Every valid Javascript program is a valid Typescript program. Eventually Typecsript code converted into Javascript.

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
- Not recomended for small projects.

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
- never (Infinite loop. it will never end)
- enum
- tuple
- union
```ts
let loggin: true | false
console.log(loggin);
```
### Union types more specifically can represent several types at a time.
Lets see the exampls:
```ts
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  user_id: number;
};

type AllUser = User | Admin;

const user: AllUser = {
  id: 231,
  name: "Rakib",
};
```

we can see the user did not giving any error as I am getting only the properties of type User. It means I can take either one of the type. I can choose User type or I can choose Admin type or I can choose both It will not give me an error.

Whereas for for intersection I have to take all the properties that are defined. If I do not take then I will get error.

### Intersection types combines multiple types into one.
Example:
```ts
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  user_id: number;
};

type AllUser = User & Admin;

const user: AllUser = {
  id: 231,
  name: "Rakib",
  username: "Hasan",
  user_id: 34,
};
```

I have to initialize the object like this. Basically I have to take all the property that are defined in type User and Admin. This is intersection type.

Another Example:
Suppose I am getting id from database but I do not know the types. Maximum times It either can be a number type of string type. But the problem is I can declare only one types to a variable. It can be solved by using any type. But it is not recomended Because we will loose type safety.

For solving this problem here comes union type.

```ts
function getDbId(id: number | string): void {
  console.log(`Db id is ${id}`);
}

getDbId("23");
getDbId(43);
```

See It can take either string or number and the problem is solved. It will not give me any error. 