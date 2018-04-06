/*write a function that takes an array of numbers as arguments and returns true or false depending on the following:
true if sum of two numbers in the array results a number also represented in it
false if there is no two elements do this
For example

check([1,2,3]); // true as 1+2 =3
check([5,4,6,8,3])  // true as 5+3 =8 all of them represented in the array
check([1,2,4])   // false
check([12,10,16,3,20]) // false */

function check(arr){
  arr.sort((function(a, b){return a-b}))
  for (let i = 0; i<arr.length-2; i++){
    subarr = arr.slice(i+1);
    for (let j = 0; j<subarr.length-1; j++){
      console.log(arr[i] + " and " + subarr[j] + " and " + subarr.slice(j+1));
      if (subarr.slice(j+1).includes(arr[i]+subarr[j])){
        return true;
      }
    }
  }
  return false;
}

/*Array passed to function check.
modifiedArr variable defined which stores the original input array. This variable will be used further in the function.
for loop ranging across the size of the input array variable. This accounts for all the values in the array.
modifiedArr removes the value that will be used in the maths addition (at array value i) and creates an array without it.
for loop ranging across the size of the modifiedArr variable.
If the value removed from the array in step 4 (arr[i]) summed with the current index value in modifiedArr variable is equal to a value in the input
array, then return true. (NOTE: If we want to make it exclusive so that the value of sum does not equal to itself (e.g. array of [0,2,4] to return 
false as 0 and 2 should equal 4, not itself as 2), then the code line arr.includes(arr[i]+modifiedArr[j]) would be modifiedArr.includes(arr[i]+
modifiedArr[j])) along with modifiedArr.splice(j, 1); (before the if statement check) to remove the second value being added.
Reset modifiedArr variable and repeats the step 4-6.
When outside the nested for loops, it implies no matches and thus returns false.*/

 function chec(arr) {
    	
    	let modifiedArr = arr.slice();
    		
    	for (let i=0; i<arr.length; i++) {
    		modifiedArr.splice(i, 1);
    		for (let j=0; j<modifiedArr.length; j++) {
    			if (arr.includes(arr[i]+modifiedArr[j])){
    				return true;
    			}
    		}
    		modifiedArr = arr.slice();
    	}
    	
    	return false;
    }

console.log(check([1,2,3])); // true as 1+2 =3
console.log(check([5,4,6,8,3]));  // true as 5+3 =8 all of them represented in the array
console.log(check([1,2,4]));   // false
console.log(check([12,10,16,3,20])); // false */

console.log(chec([1,2,3])); // true as 1+2 =3
console.log(chec([5,4,6,8,3]));  // true as 5+3 =8 all of them represented in the array
console.log(chec([1,2,4]));   // false
console.log(chec([12,10,16,3,20])); // false */
