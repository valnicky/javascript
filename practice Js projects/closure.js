function step_iterator(num, times){
	return function() {
		var res = num;
		num = num + times;
		return res;
	}
	
}


var stepsoftwo = step_iterator(0, 2);

console.log(stepsoftwo());
console.log(stepsoftwo());
console.log(stepsoftwo());

/*if we save it in another variable it begins again from 0 when we call it*/
var anotherstepsoftwo = step_iterator(0, 2);


console.log(anotherstepsoftwo());
console.log(anotherstepsoftwo());
console.log(anotherstepsoftwo());


/*2.*********/

function first(x) {
	return function() {
		return x++;
	}
}


console.log(first(1)());

/*3./*******/

function add(to) {
	return function(x) {
		return x + to;
	}
}

console.log(add(2)('xyz'));



