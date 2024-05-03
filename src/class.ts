
class User {
    private name: string;
    public email: string;
    readonly city: string = "Dhaka";
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
}

const newUser = new User("Rakib", "r@gmail.com");
console.log(newUser);

// newUser.city = "";





export {}