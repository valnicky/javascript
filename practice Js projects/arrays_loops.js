/*1. write a js function named  js_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in 
the Math object*/


function js_integer(v) {

	if(typeof v == 'number') {
		console.log(v +" is a " +typeof(v) + '\n' );
	}
}

js_integer(7);
js_integer('a');

/*2. Using the forEach function defined for an array find the sum of the array of numbers [function add_all(arr){...}]*/
var sume = 0;
var numbers = [4,8,9,4];
numbers.forEach(add_all);

function add_all(arr){
		sume += arr;
}

console.log("2. result suma es: "+ sume + "\n");

/*3. write a js program to convert temperatures to and from celsius, fahrenheit [use the formula c/5= (f-32)/9 where c=
 temperature in celsius and f = temperature in fahrenheit]*/ 
var c;
var f;

function fahToCel(f) {
	c = ((f-32)*5) /9;
	console.log("3. " + c + " celsius");
}

function celToFah(c) {
	f = ((9* c)/5) +32;
	console.log(f + " fahrenheit" + "\n");
}

fahToCel(114);
celToFah(40);

 /*4. write a factorial function that returns the factorial of a given number n, Make sure you return the calculated value and not just print it
  [function factorial(n){}]*/


  /*5. write a js function that converts  a given amount of money into coins of denominations(1, 2, 5, 10 and 25)[function convert_to_coins(amount){...} 
  you may choose to print the coin denominations used on the console E.g convert_to_coins(87) should print 25 25 25 10 2]*/
var rest;
var array = [];

function convert_to_coins(amount){
	if((amount/25) >= 1) {
		rest = amount/25;
		

		console.log(amount%25);
		amount = amount - 100;

		console.log("5. " + rest + " of 25" + array);
			
	} else if (amount % 10 == 0){

	}
	
}

convert_to_coins(87);






