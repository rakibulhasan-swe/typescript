
// generic type -> Dynamic type


type GenericArray<T> = Array<T>;

// const numbers: Array<number> = [2, 34, 53];
const numbers: GenericArray<number> = [2, 34, 53];

const fruits: GenericArray<string> = ["Mango", "Litchi", "Watermelon"];


// not recomended to pass obj as type. Try to declare specific type.
type userObj = {
    username: string,
    email: string
}
interface UserInfo{
    username: string,
    email: string,
    age: number
}
const user: GenericArray<UserInfo> = [
    {
        username: "Rakib",
        email: "r@gmail.com",
        age: 24
    },
    {
        username: "Sakib",
        email: "s@gmail.com",
        age: 28
    },
    {
        username: "Saim",
        email: "saim@gmail.com",
        age: 25
    }
]


// generic tuple
type GenericTuple<X, Y> = [X, Y];
const names: GenericTuple<string, string> = ["Rakib", "Sakib"];


// generic interface
interface Developer <T> {
    name: string;
    computer: {
        brand: string;
        model: string;
    };
    smartWatch: T
}

const dev: Developer<string> = {
    name: "Rakib",
    computer: {
        brand: "Dell",
        model: "Inspiron"
    },
    smartWatch: "Realme Watch"
}



// generic function
function addTwoNumbers(n1: number, n2: number): number{
    return n1+n2;
}
addTwoNumbers(21, 23);


const createArray = (p: string): string[] => {
    return [p];
}
const arr = createArray("Australia");

const createArrayWithGeneric = <T>(p: T): T[] => {
    return [p];
}
console.log(createArrayWithGeneric<boolean>(true));
console.log(createArrayWithGeneric<string>("Bangladesh"));
type user = {
    id: number;
    name: string;
}
console.log(createArrayWithGeneric<user>({id: 1, name: "R"}));


export {}