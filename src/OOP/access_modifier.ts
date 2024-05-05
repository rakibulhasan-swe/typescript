
class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this._balance = 0;
    }

    checkBalance(){
        console.log(`Your Balance: ${this._balance}`);
    }

    depositBalance(amount: number){
        this._balance += amount;
    }

    withDrawBalance(amount: number): void{
        if(this._balance >= amount) this._balance-=amount;
        else console.log("Your balance is less than the amount");
    }
}

const acc1 = new BankAccount(12, "Rakib");
// acc1.id // can not assign value bcz of readonly

// acc1.balance = 0 --> balance can not be accessed 
acc1.depositBalance(40000);
acc1.checkBalance();

acc1.withDrawBalance(30000);
acc1.checkBalance();

acc1.withDrawBalance(100000);
acc1.checkBalance();


export {}