/*Multiple Of Sums
Write a function that takes an array of numbers as argument and returns a number respresents multipe of sums of every two next numbers in the array

Examples

multSum([1,2,3,4,5,6]); // 3 * 7 * 11= 231
multSum([1,2,5]) //  3 * 5 = 15

for loop to check array
if statement to check id arr[x+1] === undefined*/

function multSum(arr){
	let prod = 1;
	let sum;
	for(let x=0; x<arr.length; x+=2){
		if(arr[x+1] === undefined){
			sum = arr[x];
        } else {
			sum = arr[x] + arr[x+1]; 
        }
		prod *= sum;
    }
	return prod;
}

console.log(multSum([1,2,3,4,5,6])); // 3 * 7 * 11= 231
console.log(multSum([1,2,5])); //  3 * 5 = 15
