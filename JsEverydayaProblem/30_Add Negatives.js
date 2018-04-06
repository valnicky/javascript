/*Add Negatives
Write a function that takes an array of elements of any data type and return a number represents sum of (multiplication result of all non negative
numbers with 0 included and sum of all negative numbers)

For example
addNeg([1,"5",NaN,2,3,-5,4,-6,7,8,-9]);// (1*2*3*4*7*8)+(-5-6-9) = 1324
addNeg([-1,-5,-3,4,-1,6,true]) // (4*6) + (-1-5-3-1) // 14
addNeg([0,-2,3,-1]) // -3

Array of numbers passed to function AddNeg.
Variables positiveMultiplication and negativeAddition initialised.
for loop set to run across length of input array.
If the array value at the loop index i is a number and greater or equal to 0 then multiply this value to the variable positiveMultiplication.
If the array value at the loop index i is a number and less than 0 then add this value to the variable negativeAddition.
Return the addition of variables positiveMultiplication and negativeAddition from the function.*/

 function addNeg(arr) {
      let positiveMultiplication = 1;
      let negativeAddition = 0;
      
      for(let i=0; i<arr.length; i++) {
        if(arr[i] >= 0 && Number.isInteger(arr[i])) {
          positiveMultiplication *= arr[i];
        }
        else if(arr[i]<0 && Number.isInteger(arr[i])) {
          negativeAddition += arr[i];
        }
      }

      return positiveMultiplication + negativeAddition;
    }

    function AddNeg(arr){
	let res = 1, sum = 0;
	for(let i = 0; i < arr.length; i++){
		if(typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
			if(arr[i] >= 0) res *= arr[i];
			else sum += arr[i];
		}
	}
	return res + sum;
}

console.log(addNeg([1,"5",NaN,2,3,-5,4,-6,7,8,-9]));// (1*2*3*4*7*8)+(-5-6-9) = 1324
console.log(addNeg([-1,-5,-3,4,-1,6,true])); // (4*6) + (-1-5-3-1) // 14
console.log(addNeg([0,-2,3,-1])); // -3

console.log(AddNeg([1,"5",NaN,2,3,-5,4,-6,7,8,-9]));// (1*2*3*4*7*8)+(-5-6-9) = 1324
console.log(AddNeg([-1,-5,-3,4,-1,6,true])); // (4*6) + (-1-5-3-1) // 14
console.log(AddNeg([0,-2,3,-1])); // -3
