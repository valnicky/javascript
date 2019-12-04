/*given an array of strings, find the largest string using reduce or filter or a loop*/

var arrayString = ['abecedario','ferma', 'guarderia'];


var findString = arrayString.reduce(function(prev, curr, index){
	var item1, item2;

	if (curr > prev){
		item1 = curr;
		
	} else if (curr < prev) {
		item2 = prev;
	}
	return item;

});

console.log(findString);


