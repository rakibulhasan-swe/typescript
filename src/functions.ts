function doSomething(income: number): object{
    if(income) return {income: income};
    return {
        success: true
    };
}
console.log(doSomething(70000));