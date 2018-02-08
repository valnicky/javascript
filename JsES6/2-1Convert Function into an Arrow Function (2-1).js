// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square =>{
	 square *= square; return square;
});

console.log(...squares);
