
// type of as type guard -

type Alphanumeric = number | string;

const add = (n1: Alphanumeric, n2: Alphanumeric): Alphanumeric => {
    if(typeof n1 === "number" && typeof n2 === "number") return n1+n2;
    return ""+n1+n2;
}

console.log(add(23, 21));
console.log(add("23", 21));
console.log(add("23", "21"));


// in guard as type guard
type Normaluser = {
    name: string;
}

type Adminuser = {
    name: string;
    role: "admin";
}

const getUser = (user: Normaluser | Adminuser): void => {
    if('role' in user) console.log(`${user.name} is a Admin!!`);
    else console.log(`${user.name} is a Normal User!!`);
}

getUser({name: "Rakib"});
getUser({name: "Sakib", role: "admin"});



// oop instanceof as type guard
class Person {
    name: string;
    email: string;
    age: number;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class Student extends Person{
    courses: string[];
    constructor(name: string, age: number, email: string) {
        super(name, age, email);
        this.courses = ["English", "CSE101", "CSE102"];
    }

    semesterFee(){
        console.log("Semester Fee 35000");
    }
}

class Teacher extends Person{
    designation: string;
    constructor(name: string, age: number, email: string){
        super(name, age, email);
        this.designation = "Lecturer";
    }

    salary(){
        console.log("Salary = 40000");
    }
}

const s1 = new Student("Rakib", 25, "r@gmail.com");
const t1 = new Teacher("Ashfaq", 30, "a@gmal.com");

console.log(s1, t1);
// s1.semesterFee();
// t1.salary();

const getInstanceOf = (p: Person): void => {
    if(p instanceof Student) p.semesterFee();
    else if(p instanceof Teacher) p.salary();
}

getInstanceOf(s1);
getInstanceOf(t1);


export {}