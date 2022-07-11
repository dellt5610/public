/*
References:
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method
*/

const myArray = ['one', 'two', 'three'];
myArray.myMethod = function(sProperty){
    console.log(arguments.length > 0 ? this[sProperty] : this.toString());
}

myArray.myMethod();//prints 'one', 'two', 'three'
myArray.myMethod(1);//prints 'two'

/*
The above works because when myMethod is called, its this is set to myArray by the 
call, so within the function, this[sProperty] is equivalent to myArray[sProperty]. 
However, in the following:
*/
setTimeout(myArray.myMethod, 1000);//prints [object Windows] after 1 second.
setTimeout(myArray.myMethod, 1500, '1');//prints "undefined" after 1.5 seconds.

/*
Code executed by setTimeout() is called from an execution context separate from the function from which setTimeout was called.
The myArray.myMethod function is passed to setTimeout, then when it's called, its 
this is not set so it defaults to the window object. There's also no option to pass a 
thisArg to setTimeout as there is in Array methods like forEach, reduce, etc. and as 
shown below, using call to set this doesn't work either.
*/

/*
A common way to solve the problem is to use a wrapper function that sets this to the required value:
*/
setTimeout(function(){myArray.myMethod()}, 2000); // prints "zero,one,two" after 2 seconds
setTimeout(function(){myArray.myMethod('1')}, 2500); // prints "one" after 2.5 seconds