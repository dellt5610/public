"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.height = "165cm";
    }
    return Person;
}());
var a = new Person("John Ive", 50);
console.log("name: " + a.name);
//console.log("age: " + a.age);//age: private => cannot use
console.log("height: " + a.height);
