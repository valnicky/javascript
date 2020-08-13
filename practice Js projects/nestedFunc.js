/*nested functions*/

function hypotenuse(a, b) {
	function square(x) {return x*x;}

	return console.log(Math.sqrt(square(a) + square(b)));
}

hypotenuse(3,4);

/******/