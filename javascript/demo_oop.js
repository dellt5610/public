//demo OOP
let age = 10;
//define a new instance named person
const person = {
    name: 'John',
    age: age,
    school: {
        name: "Cambridge"
    },
    greetings: function(){console.log('Hello from Mr. Musik!')}
};
console.log(person);
console.log('age: ' + person.age);
person.greetings();

//old way: define a class via the function keyword
function Person(name, age){
    this.name = name;//this: represent for objects that to be instantiated later.
    this.age = age;
    this.greeings = function(){
        console.log('Hello! My name is ' + this.name);
    }
}
const obama = new Person("Obama",55);
const trump = new Person('Trump', 72);
console.log(obama);
obama.greeings();
console.log(trump);
trump.greeings();
console.log(typeof obama);

//new way: define a class via the class keyword (started from ES6)
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log("Hello! My name is: " + this.name);
    }
}

const studentA = new Student("Tony", 20);
const studentB = new Student("William", 18);
console.log(studentA);
console.log('age of studentA: ' + studentA.age);
console.log(studentB);
studentA.greetings();
studentB.greetings();

/*
* Exercise: create a class named Point including 02 properties x & y passed into constructor of the Point class.
* Then write a method getDistance that return a distance between that point & (0,0)
*
*/
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    getDistance(){
        let x2 = this.x*this.x;
        let y2 = this.y*this.y;
        return Math.sqrt(x2+y2);
    }
    toString(){
        return '(' + this.x + ',' + this.y + ')';
    }
}
const pointA = new Point(1,0);
console.log('Distance between ' + pointA + ' and (0,0) = ' + pointA.getDistance());

class Line{
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }
    getLength(){
        let deltaX = this.pointB.x - this.pointA.x;
        let deltaY = this.pointB.y - this.pointA.y;
        return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    }
}

const point1 = new Point(0,0);
const point2 = new Point(2,0);
const line = new Line(point1, point2);
console.log('Distance between ' + point1 + ' and ' + point2 + ' = ' + line.getLength());

class Triangle{
    constructor(point1, point2, point3){
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
    getPerimeter(){
        const line1 = new Line(this.point1,this.point2);
        const line2 = new Line(this.point2,this.point3);
        const line3 = new Line(this.point3,this.point1);
        const len1 = line1.getLength();
        const len2 = line2.getLength();
        const len3 = line3.getLength();
        const max = Math.max(len1, len2, len3);
        const total = len1 + len2 + len3;
        if (total / 2 === max) throw new Error(this + " is on a row => Not a triangle!");
        return total;
    }
    toString(){
        return this.point1 + ',' + this.point2 + ',' + this.point3;
    }
}
const p1 = new Point(1,1);
const p2 = new Point(2,2);
const p3 = new Point(3,3);
const triangle1 = new Triangle(p1,p2,p3);
console.log(triangle1 + ' has perimeter = ' + triangle1.getPerimeter());

/*
* getters & setters
*/
class Employee{
    constructor(age){
        this.age = age;//_: signal that do not access this property.
    }
    get birthYear(){
        return 2018 - this.age;
    }

    // set birthYear(value){
    //     this.age = 2018 - value;
    // }
}
const empA = new Employee(10);
//console.log(empA.getBirthYear);
console.log(empA.birthYear);
empA.birthYear = 2010;
console.log(empA.birthYear);