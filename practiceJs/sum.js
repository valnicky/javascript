var lineItemCount = 5;

outerLoop:
for ( var i = 0; i < lineItemCount; i++ ) {
	for (var j = 0; j < 3; j++) {
		if(j == 1){
			continue outerLoop;}
			console.log("i: " + i  + " j: "+ j);
	}
	console.log("outside " + i +j);
}

console.log(productId);
var productId = '9000';


try {
	
	throw 123;
}
catch (e) {
	console.log(e);
}