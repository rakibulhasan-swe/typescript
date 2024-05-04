

// class - classes are the bluprints for objects. In a class we declare property and methods.

class User {
    private id: number = 12;
    name: string;
    email: string;
    readonly city: string = "Dhaka";

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    greetings(){
        console.log(`Hi, ${this.name}`);
    }
}


// objects 
const newUser = new User("Rakib", "r@gmail.com");
console.log(newUser);

// newUser.city = "";

newUser.greetings();

// newUser.id  -> private can not access it.





export {}