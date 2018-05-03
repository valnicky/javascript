function adjacentElementsProduct(inputArray) {
	let mult = 0;
	let arr = [];

	for(let i = 0; i < inputArray.length-1; i++ ){
		
		//console.log(inputArray[i] * inputArray[i+1]);
		arr.push(inputArray[i] * inputArray[i+1]);
	}
	//console.log(arr);
	let result = Math.max(...arr);

	return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
//console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));