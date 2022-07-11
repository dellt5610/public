
const numbers = [1, 5, 2, 7];
numbers.pop();  //remove the last item
console.log(numbers);
numbers.shift();//remove the first item
console.log(numbers);
numbers.splice(4, 3, 9, 7);//insert items at a specific index.
console.log(numbers);
numbers.push(100);//append into the last item
console.log(numbers);
numbers.unshift(1);//add before the first item
console.log(numbers);

const people = [
    {name: "John", age: 55, height: 160},
    {name: "William", age: 5, height: 155},
    {name: "Teddy", age: 12, height: 170},
    {name: "Mary", age: 32, height: 190}
];

const output = people.filter(person => person.age > 11);//filter onlyl return new array, will not change the existing array.
console.log(output);

//build our own filter named myFilter
Array.prototype.myFilter = function(checkFn){
    const output = [];
    for (let index = 0; index < this.length; index++){
        const element = this[index];
        if (checkFn(element)) output.push(element);
    }
    return output;
}

console.log(people.myFilter(person => person.age > 11));

const numbers2 = [1, 3, 5, 2];
console.log(numbers2.map(x => x*x));

//build our own map named myMap
Array.prototype.myMap = function(transform){
    const output = [];
    for (let index = 0; index < this.length; index++){
        const element = this[index];
        const newElement = transform(element);
        output.push(newElement);
    }
    return output;
}

console.log(numbers2.myMap(x => x+1));

console.log(people.some(x => x.name === 'Trump'));
console.log(people.some(x => x.name === 'John'));

//build our own some named mySome
Array.prototype.mySome = function(isExisting){
    for (let index = 0; index < this.length; index++){
        const element = this[index];
        if (isExisting(element))
            return true;
    }
    return false;
}

console.log(people.mySome(x => x.name === 'Trump'));
console.log(people.mySome(x => x.name === 'John'));

console.log(people.every(x => x.age > 1));
console.log(people.every(x => x.age > 20));
//build our own every named myEvery
Array.prototype.myEvery = function(isExisting){
    for (let index = 0; index < this.length; index++){
        const element = this[index];
        if (!isExisting(element))
            return false;
    }
    return true;
}
console.log(people.myEvery(x => {
    console.log("Item " + x);
    return x.age > 1;//if not using return then it will return undefined.
}));
console.log(people.myEvery(x => x.age > 20));

console.log(people.find(person => person.name === 'Emily'));//undefined
console.log(people.find(person => person.name === 'John'));//{ name: 'John', age: 55, height: 160 }

//build our own find named myFind.
Array.prototype.myFind = function(match){
    for(let index = 0; index < this.length; index++){
        const element = this[index];
        if (match(element))
            return element;
    }
}
console.log(people.myFind(person => person.name === 'Emily'));//undefined
console.log(people.myFind(person => person.name === 'John'));//{ name: 'John', age: 55, height: 160 }

console.log(people.findIndex(person => person.name === 'Emily'));//undefined
console.log(people.findIndex(person => person.name === 'John'));//{ name: 'John', age: 55, height: 160 }

people.forEach(person => console.log(person))

//build our own forEach named myForEach.
Array.prototype.myForEach = function(doSomething){
    for (let index = 0; index < this.length; index++){
        const element = this[index];
        doSomething(element);
    }
}

// let index = 1;
// people.myForEach(person => {
//     //console.log("Hello. My name is " + person.name + ", " + person.age + " years old");
//     console.log("Use backstick in ES6 to output the result");
//     console.log(`[${index++}] Hello. My name is ${person.name}, ${person.age} years old`);
// })

people.forEach((person, index) => {
    //console.log("Hello. My name is " + person.name + ", " + person.age + " years old");
    console.log("Use backstick in ES6 to output the result");
    console.log(`[${index+1}] Hello. My name is ${person.name}, ${person.age} years old`);
})

const numbers3 = [1, 4, 2, 3, 10];
console.log('sort: ' + numbers3.sort())
console.log(numbers3.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}));
console.log(numbers3.sort((a, b) => a - b));

console.log(people.sort((p1, p2) => p1.age - p2.age));
console.log(people.sort((p1, p2) => -p1.age + p2.age));

//reduce: merge 02 element into 01 element.
console.log(numbers3.reduce((a,b) => a + b));
console.log(people.map(p => p.age).reduce((a, b) => a + b));