
// abstraction - giving idea what to do but actual implementation will be on the class which implements the interface
// - using interface - using abstract keyword

interface Vehicle {
    name: string;
    model: string;

    startEngine(): void;
    stopEngine(): void;
}

// const v1: Vehicle = {
//     name: "Toyota",
//     model: "32456"
// }

class Car implements Vehicle{
    name: string = "Nissan";
    model: string = "6574";

    startEngine(): void {
        console.log("Starting Engine!!");
    }

    stopEngine(): void {
        console.log("Stopped Engine!!");
    }

    testEngine(): void {
        console.log("Testing Engine!!");
    }
}

const c1 = new Car;
c1.startEngine();
c1.stopEngine();


// using abstract class - no instance
abstract class User{
    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    abstract userInfo(): void;
}

class Normaluser extends User {
    constructor(name: string, email: string){
        super(name, email);
    }

    userInfo(): void {
        console.log(`Hello, ${this.name}`);
    }
}

const user1 = new Normaluser("Rakib", "r@gmail.com");
user1.userInfo();


export {}