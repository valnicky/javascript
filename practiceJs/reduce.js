



/*prev: returned in the last invokation of the callback or initial value if supplied,
curr: current elem being processed in the array,
index: index of the curr element,
arr: array on which reduce was called*/


var a = [3, 4, 6, 7, 9].reduce(function(prev, curr, index, array){//prev= 0(+ the rest), curr: 3, 4 etc, index: 0,1 etc, array:[nums]
	return prev +curr;
}, 0);

console.log(a);

/*could be like:*/

var b = [3, 4 ,6, 7, 9].reduce(function(prev, curr) {
	return prev +curr;
});

console.log(b);


/******/
function range(start, end, step) {
	var res = [];
	var item = start;
	while(item <= end){
		res.push(item);
		item = item +step;
	}
	return res;
}
console.log(range(2, 15, 3));

/****with reduce************/

function sum_natural_nos(n) {
	return range(2, n, 2).reduce(function(prev, curr){
		return prev + curr;
	});
	
}

console.log(sum_natural_nos(15));

console.log(sum_natural_nos(5));

/**************/
/*function (prev, curr, index, array){//prev-> value previously returned in the last invocation of the callback or initial value if supplied or the sum of the prviews
	//curr->current element being processed in the array
	//index-> index of the curr element
	//array -> array on which reduce was called

}*/
console.log('*********************************************');
var reduceFunc = [4, 5, 6, 7, 9].reduce(function(prev, curr, index, arr){
	return prev + curr;
}, 0);//0 initial value

console.log(reduceFunc);






