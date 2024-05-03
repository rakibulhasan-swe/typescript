
// type assertion - Typescript does not know about the type better than me that is type assertion.

let anything: any;

anything = "Full stack development";

(anything as string).length;


function addOrConcat(a:number, b: number, c: "add" | "concat"): number | string{
    if(c=="add") return a+b;
    else return ""+a+b;
}

// let ans: string = addOrConcat(12, 21, "concat"); // here ts can not declare that what he will get as a type bt i know that it will be string.

let ans: string = addOrConcat(12, 21, "concat") as string;
let sum: number = addOrConcat(32, 21, "add") as number;

console.log(ans, sum);


export {}