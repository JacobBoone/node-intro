

// copy a file to a new file
var fs = require('fs')

var copy = fs.readFileSync('1.txt', 'utf-8')

 fs.writeFileSync('2.txt', copy)


console.log(copy)