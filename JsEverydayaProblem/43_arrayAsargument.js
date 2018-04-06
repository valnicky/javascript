/*Write a function that takes an array of numbers as argument and returns a number represents how many numbers should be added to the array to be 
consecutive array

For example

makeConsecutive([1,3,4,5]) // 1 as 2 should be added
makeConsecutive([10,12,14]) // 2 as 11 and 13 should be added
makeConsecutive([9,3,6,8])// 3 as 4,5,7 should be added*/

function makeConsecutive(arr){
	arr.sort(function(a, b) {
 		 return a - b;
	});

	let result = 0;

	for(let i = 1; i < arr.length; i++){
		if(arr[i] - arr[i - 1] != 1) result += (arr[i] - arr[i - 1]) - 1;
	}

	return result;
}

console.log(makeConsecutive([1,3,4,5])); // 1 as 2 should be added
console.log(makeConsecutive([10,12,14])); // 2 as 11 and 13 should be added
console.log(makeConsecutive([9,3,6,8]));// 3 as 4,5,7 should be added

/*Sorted the array
Loop through the array
If the difference between element and previous element isn’t 1, add that difference minus 1 to end result*/