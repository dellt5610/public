function hello(name: string){
    console.log(`Hello ${name}`);
}

function add(a: number, b: number) : number {
    return a + b;
}

const total = add(5,7);
console.log('total: ' + total);