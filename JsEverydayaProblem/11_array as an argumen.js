Write a function that takes an array as an argument and finds the smallest number divisible by all array elements

For example

smallestDivisible([1,2,4,9]); // 36
consider all numbers of the array to be > 0



An array of numbers is passed to function smallestDivisible.
Variable arr defined which is the input array sorted in an ascending order.
Variable multiple set at the largest value of in the array set. The check of the smallest divisible value starts with this.
Variable trigger initialised, which would be the indicator in the loop.
while loop created.
for loop iterated through, upto the size of the array.
if the multiple value divided by the array value (at the point in the for loop) has a remainder (i.e. it isn’t divisible), the trigger is set to N.
Outside the for loop, if the trigger is still set to Y, this means all values in the array were divisible by the value in the variable multiple. Break out of all the loops at this point.
else, increment the value in the variable multiple by 1, reset the trigger to Y and redo the while loop again.
When the correct divisible value by all the digits in the array are found, the variable storing this (multiple) is returned.



function smallestDivisible(array){

  var arr = array.sort(function (x, y) {return x - y;});
  var multiple = arr[arr.length - 1];
  var trigger = 'Y';

  while (true) {
    for (var i=0; i<arr.length ; i++){
      if (multiple % arr[i] !== 0){
        trigger = 'N';
      }
    }
        
    if (trigger === 'Y') {
      break;
    }
    else {
      multiple++;
      trigger = 'Y';
    }
  }
  
  return multiple;
}


Check max of array
While loop to continue until all numbers are divisible by an element
Iterate through array to check if all elements are divisible
If they are return that number


function smallestDivisible(arr){
	var divisibleNum = Math.max(...arr);
	let prob = true;
	while(true){
		for(let i = 0; i < arr.length; i++){
            if(divisibleNum % arr[i]){
                prob = false;
				divisibleNum++;
                break;
            }
		}
	if(prob) break;
	else prob=true;
	}

return divisibleNum;
}
smallestDivisible([1,10,3,9,11]);