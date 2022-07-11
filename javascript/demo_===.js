//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
var num = 0;
var obj = new String('0');
var str = '0';
var num2 = 0;
var obj2 = new String('0');
var str2 = '0';

console.log(num === num);//true
console.log(obj === obj);//true
console.log(str === str);//true
console.log(num === num2);//true
console.log(obj === obj2);//false
console.log(str === str2);//true

console.log(num === obj);//false
console.log(num === str);//false
console.log(obj === str);//false

console.log(typeof obj);//object
console.log(typeof str);//string
console.log(typeof obj2);//object

console.log(null === undefined);//false
console.log(obj === null);//false
console.log(obj === undefined)//false