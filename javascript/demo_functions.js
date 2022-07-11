function doSomething(fn){
    fn();
}
doSomething(console.log);//print empty line
//doSomething(console.log());//console.log() returns undefined => fn() # undefined() => TypeError: fn is not a function

function printLog(){
    return console.log
}
printLog('Hello World!');//print nothing
//note: printLog() will return a function => printLog()() will execute that function
printLog()('See you again!');//print 'See you again!'