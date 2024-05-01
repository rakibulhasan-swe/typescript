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


}