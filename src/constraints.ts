
const createArrayWithGeneric = <T extends {id: number, name: string}>(p: T): T[] => {
    return [p];
}

// console.log(createArrayWithGeneric<boolean>(true));
// console.log(createArrayWithGeneric<string>("Bangladesh"));

type user = {
    id: number;
    name: string;
}
console.log(createArrayWithGeneric<user>({id: 1, name: "R"}));


// generic constraints with keyof operator
type Vehicle = {
    bike: string;
    car: string;
    jet: string;
}

type V = "bike" | "car" | "ship";

type V1 = keyof Vehicle;

// const p: V1 = "";


export {}