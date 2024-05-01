
const user: {
    name: string;
    age: number;
    isActive: boolean;
    cgpa: number;
} = {
    name: "Rakib",
    age: 25,
    cgpa: 3.52,
    isActive: true
};
console.log(user);


function createUser({name, isLoggedIn}: {name: string, isLoggedIn: boolean}): {}{
    if(isLoggedIn) return {sucess: true, name: name};
    return {sucess: false, name: name};
}
console.log(createUser({name: "Rakib", isLoggedIn: true}));


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    address?: string;
}

let myUser: User = {
    _id: "112",
    name: "Rakib",
    email: "r@gmail.com",
    isActive: true
}
console.log(myUser);



export {}