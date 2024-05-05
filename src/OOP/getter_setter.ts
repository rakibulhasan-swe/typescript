
class BankAccount {
    readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this._balance = 0;
    }

    // getter
    get balance() {
        return this._balance;
    }

    // setter
    set depositBalance(amount: number){
        this._balance += amount;
    }
}

const acc1 = new BankAccount(12, "Rakib");


acc1.depositBalance = 20000;
console.log(acc1.balance); // we can access a function using dot notation after using getter;




// static -> sharing same reference
class Counter {
    static count: number = 0;

    increment(){
        return Counter.count+=1;
    }

    decrement(){
        return Counter.count-=1;
    }
}

const c1 = new Counter();
console.log(c1.increment());

const c2 = new Counter();
console.log(c2.increment());





export {}