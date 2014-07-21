

// copy contents of specific file to a new specific file
// var fs = require('fs')

// var copy = fs.readFileSync('1.txt', 'utf-8')

//  fs.writeFileSync('2.txt', copy)


// console.log(copy)




// copy a file to a new file in a generic way


// var fs = require('fs')

// var copy = fs.readFileSync(process.argv[2], 'utf-8')

//  fs.writeFileSync(process.argv[3], copy)


// console.log(copy)




// copy many filea into a 1 new file in a generic way



var fs = require('fs');



var output = '' ;
	for (var i = 2; i < process.argv.length; i++) {
		var newFile = fs.readFileSync(process.argv[i], 'utf-8');

		console.log(newFile);
		output = output + newFile;
	};

 


 fs.writeFileSync('3.txt', output)


