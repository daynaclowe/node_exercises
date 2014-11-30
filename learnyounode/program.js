// Baby Steps
// var sum = 0

// for (i=2; i < process.argv.length; i++){
// 	sum += Number(process.argv[i]);
// }

// console.log(sum);


//My First I/O
var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)