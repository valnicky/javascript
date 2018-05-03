const shapeArea = n => (
	n === 1 ? 1: shapeArea(n - 1) +(n -1 ) * 4
	)

console.log(shapeArea(2));
console.log(shapeArea(3));

