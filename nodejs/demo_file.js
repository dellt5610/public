var fs = require('fs');//fs: file system module
var currencies = fs.readFileSync(__dirname + '/currencies.txt');
console.log(currencies);//<Buffer 55 53 44 0a 42 47 4e 0a 56 4e 44 0a 45 55 52>
console.log(currencies.toString());//USD\nBGN\nVND\nEUR
console.log(currencies.toJSON());//{ type: 'Buffer',data: [ 85, 83, 68, 10, 66, 71, 78, 10, 86, 78, 68, 10, 69, 85, 82 ] }