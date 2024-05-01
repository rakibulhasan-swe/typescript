{

// type alias

type Student = {
    name: string;
    age: number;
    gender: string;
    email: string;
    address?: string;
}

const student1: {
    name: string;
    age: number;
    gender: string;
    email: string;
} = {
    name: "Rakib",
    age: 25,
    gender: "Male",
    email: "rakib@gmail.com"
};

const student2: {
    name: string;
    age: number;
    address: string;
} = {
    name: "Saim",
    age: 26,
    address: "Dhaka"
};

const student3: Student = {
    name: "Nabil",
    age: 25,
    gender: "Male",
    email: "nabil@gmail.com"
}

console.log(student1, student2, student3);


}