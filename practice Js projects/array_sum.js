/**write a function  which takes an array as parameter and return the sum of all the elements*/
function sumOfelements(arr){
let result = 0;
for(let i = 0; i < arr.length; i++){
	result += arr[i];
}
return result;
}
elems = [1,5,6,2];
console.log(sumOfelements(elems));
/*using forEAch and then reduce*/

function sumForeach(arr) {
	let result = 0;
	arr.forEach((v) => {
		result += v;
	});
	return result;
}

console.log(sumForeach(elems));


function reduceSum(arr) {
	return arr.reduce((sum, curr)=>
		{return sum + curr;
	}, 0 );
}

console.log(reduceSum(elems));