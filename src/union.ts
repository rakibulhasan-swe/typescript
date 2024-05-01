
let score: number | string = 32;
score = "23";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

function getDbId(id: number | string){
    console.log(`Db id is ${id}`);
}

getDbId("23");
getDbId(43);


// literals 
let shirtSize: "S" | "M" | "L";
shirtSize = "L";



export {}