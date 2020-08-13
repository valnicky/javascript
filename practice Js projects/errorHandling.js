function sum() {
	var args = Array.prototype.slice.call(arguments);
	return args.reduce(function(prev, curr){
		if(!isNaN(curr)){return prev + curr;
		}
		else {throw Error("Non-numeric argument: " + curr);
			}

		}, 0)
}


console.log(sum(1, 2));
console.log(sum(1, 2, 5));
//console.log(sum(1, 2, "n"));



function test() {
	try{sum(2, 4, "s");}catch(error){console.log(error);}
	
	console.log('doing smth else');
}

console.log(test());