{
    
// Normal Function
function sayHi(): void{
    console.log("Hi!! Developer...");
}
sayHi();

function sum(n1: number, n2: number): number {
    return n1+n2;
}
console.log(sum(12, 21));

function doSomething(income: number): object{
    if(income) return {income: income};
    return {
        success: true
    };
}
console.log(doSomething(70000));

// Function expression
const addThreeNum = function (n1: number, n2: number, n3: number): number {
    return n1+n2+n3;
}
console.log(addThreeNum(12, 21, 23));


// Arrow function
 const fullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

console.log(fullName("Md. Rakibul", "Hasan"));


// type -
type TOurFunctioon = (n1: number, n2: number) => number;
const numberFunction: TOurFunctioon = (n1, n2) => {
    return n1+n2;
}
console.log(numberFunction(211, 32));


// spraed operator spreds all the elements
const players: string [] = ["CR7", "MESSI", "NEYMAR", "HAZARD", "RODRYGO", "DE BRUYNE"];
const club = {
    ...players
}

console.log(club);

// rest operator will give a array with the elemets
const [a, , c, d, ...rest] = players;
console.log(rest);



}