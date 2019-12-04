var myarray = [67, 34, 2, 5, 6, 8];

myarray.sort();
console.log(myarray);

function comparator(x, y) {
	
	return (x - y);
	console.log(x-y);
}

myarray.sort(comparator);

console.log(myarray);

/*2. */

console.log('/*********************/');

var a = [10, 20, 30, 40, 50];
a.unshift(60);
a.pop();
a.push(70);

console.log(a);

console.log('********************/');
/*3. */


var m = [20, 30, 40, 50, 60];

/*el array m tiene que ser [10, 20, 30, 40, 50, 60, 70]*/

m.push(70);
m.unshift(10);

console.log(m);

console.log('***********************/');
/*write a js function named reverse which takes a string argument and returns the reversed string*/
var reverseStr = [];
var rev = '';

function reverseString(str){
	for(var i = 0; i< str.length; i++){
		reverseStr.unshift(str[i]);
		rev += reverseStr;
	}
	
	console.log(reverseStr);
	reverseStr.join();
	console.log(reverseStr);
}

reverseString('algo');




console.log('/*2.**********************/');


/*2. given a js array of objs having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function to sort it*/

var obj = [{radius: 5}, {radius:9}, {radius: 2}];

function comparatorFunc (a1, a2) {
	return a1-a2;
}

console.log(obj);

obj.sort(comparatorFunc);

console.log(obj);


/*3. write a js func. named length_of_array which takes an array as argument and returns the number of elements in thet array (as opposed to what is given
 by the length property of the array). Remember undefined can also be an element if it is expliticity set at some index e.g x[5]= undefined;should be counted, 
 but elements which are not present in the array (as arrays can be sparse), should not be counted*/


function length_of_array(arr) {
	return arr.length;
}

console.log(length_of_array([5,4,8,7]));


/*for each*/
console.log('/********forEach function*****/');

[1, 2].forEach(function(i) {console.log(i);}) 


/***********/
function print_element(elem ) { console.log(elem);}

[1, 5].forEach(print_element);





