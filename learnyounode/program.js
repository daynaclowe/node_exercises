// BABAY STEPS
// var sum = 0

// for (i=2; i < process.argv.length; i++){
// 	sum += Number(process.argv[i]);
// }

// console.log(sum);


//MY FIRST I/O
// var fs = require('fs')
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

//MY FIRST ASYNC I/O

// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
// })

//FILTERED L/S

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
// list.forEach(function (file) {
// if (path.extname(file) === '.' + process.argv[3])
// console.log(file)
// })
// })