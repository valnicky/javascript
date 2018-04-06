/*Find next square
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, then -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(4) --> returns 9
findNextSquare(121) --> returns 144
findNextSquare(114) --> returns -1 since 114 is not a square-
Math.pow  Math.sqrt*/


function findNextSquare(num){
	let nextSquare;
	if(Number.isInteger(Math.sqrt(num))){
			nextSquare = Math.pow(Math.sqrt(num)+1,2);
	}else{
		nextSquare= -1;
	}
	return nextSquare;
}


console.log(findNextSquare(4)); //returns 9
console.log(findNextSquare(121));// returns 144
console.log(findNextSquare(114)); //returns -1 since 114 is not a square