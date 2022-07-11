
const fs = require('fs');
console.log('will read file in SYNC mode');
const data = fs.readFileSync('../data.txt',{"encoding":"utf-8"});
console.log(data);

console.log('start reading file in ASYNC mode');
fs.readFile('../data.txt',{"encoding":"utf-8"}, (error, data) => {
    console.log(data);
});
console.log('end reading file in ASYNC mode');
