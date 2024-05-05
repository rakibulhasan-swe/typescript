
// inheritance -
class Person {
    name: string;
    age: string;
    email: string;

    constructor (name: string, age: string, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class Student extends Person{
    
    constructor (name: string, age: string, email: string) {
        super(name, age, email);
    }
}



export {}