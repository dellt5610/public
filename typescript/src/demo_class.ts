class Person{
    height = "165cm";
    constructor(public name: string, private age: number){

    }
}

const a = new Person("John Ive",50);
console.log(`name: ${a.name}`);
//console.log("age: " + a.age);//age: private => cannot use
console.log("height: " + a.height);