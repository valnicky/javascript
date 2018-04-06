/*Write a function that takes two arguments the first represents an array of numbers and the second is a number, if sum of two elements in array 
is equal to the number(the second argument), remove the two elements and replace them by the sum.
For example

reduce([1,2,3],3); // [3,3]
reduce([8,12,16,20,4],20) // [20,20,20] // sum inserted in place of the number of the first index
reduce([14,8,6,8,3,5],16) // [14,16,6,3,5]
reduce([1,6,9,8],25);  // return the array [1,6,9,8] as no sum

Array of values and total to be calculated passed to variable reduce function.
for loop set to run across the size of the input array variable (arr).
Second for loop set to run across the size of the input array variable (arr), but starting at the current character (at array index i+1) being 
compared. This is as previous values will already have been compared so only characters later in the string from the current position need to be 
compared. Also +1 as starting from same position causes conflict if the element further in the array has the same value.
If the sum of value at array elements at i and j are equal to total required, set the first element to equal to the total and remove the second 
element at j using splice.
Outside the loop, return the modified input array (arr).*/

 function reduce(arr, total) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i]+arr[j] === total) {
            arr[i] = total;
            arr.splice(j, 1);
          }
        }
      }
      return arr;
    }

console.log(reduce([1,2,3],3)); // [3,3]
console.log(reduce([8,12,16,20,4],20)); // [20,20,20] // sum inserted in place of the number of the first index
console.log(reduce([14,8,6,8,3,5],16)); // [14,16,6,3,5]
console.log(reduce([1,6,9,8],25));  // return the array [1,6,9,8] as no sum