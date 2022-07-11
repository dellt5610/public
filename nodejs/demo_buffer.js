const buffer = new Buffer('My Data', 'UTF-8');
console.log(buffer);//<Buffer 4d 79 20 44 61 74 61>

//buffer -> string
console.log(buffer.toString());//y Data
console.log(buffer.toJSON());//{ type: 'Buffer', data: [ 77, 121, 32, 68, 97, 116, 97 ] }
