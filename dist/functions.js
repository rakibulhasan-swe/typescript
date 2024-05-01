"use strict";
{
    function sayHi() {
        console.log("Hi!! Developer...");
    }
    sayHi();
    function sum(n1, n2) {
        return n1 + n2;
    }
    console.log(sum(12, 21));
    function doSomething(income) {
        if (income)
            return { income: income };
        return {
            success: true
        };
    }
    console.log(doSomething(70000));
    const addThreeNum = function (n1, n2, n3) {
        return n1 + n2 + n3;
    };
    console.log(addThreeNum(12, 21, 23));
    const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
    console.log(fullName("Md. Rakibul", "Hasan"));
}
