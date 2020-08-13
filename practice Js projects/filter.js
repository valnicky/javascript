var arr = [2, 3, 4, 6, 7, 12, 15];

console.log(arr.filter(iseven));


function iseven(elem) {
	return elem % 2 == 0;
}

/*callback function*/

function iseven(current, index, arr) {//if we pass one arg. the other are undefined
	console.log(current + " :: "+ index + " :: "+ arr);
	return current%2 == 0;
}