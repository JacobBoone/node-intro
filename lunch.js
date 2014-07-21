var myMenu = require('./menu.js')//relative file path
console.log(myMenu.lunchMenu);

var lunchItems = process.argv.slice(2);


if (lunchItems.length === 0){
	console.log('You must order at least one item!');
}

else if (lunchItems.length > 3){
	console.log('You cannot order more than 3 things!');
}


else{
console.log('Yum!node\n' + lunchItems.join('\n'));
}

