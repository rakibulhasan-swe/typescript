
/*
1. type works with primitive data types as well where as interface can not work with primitive data types.
2. Both can be inherited.

*/

type myNumber = number;
let value: myNumber = 21;
console.log(value);

// interface can inherit whereas I can do that by using intersection in type
type myUser = {
    username: string;
    email: string;
    isLoggedIn: boolean;
}

type myUser1 = {
    isAdmin: boolean
}

type User1 = myUser & myUser1;

const NormalUser: User1 = {
    username: "Md. Rakibul Hasan",
    email: "r@gmail.com",
    isLoggedIn: true,
    isAdmin: false
};


interface User {
    readonly dbID: number,
    email: string,
    userId: number,
    googleId?: number,
    sayHi: () => string,
    getCoupon(percent: number): number
}

// it will basically add new property to the User
interface User {
    githubId: string
}

interface Admin extends User{
    isAdmin: boolean
}

const saim: Admin = {
    dbID: 233,
    email: "saim@gmail.com",
    userId: 1,
    githubId: "234",
    isAdmin: true,
    sayHi: () => {
        return "Hi User!!";
    },
    getCoupon: (cp: number) => {
        return (1000*cp/100);
    }
};


export {}