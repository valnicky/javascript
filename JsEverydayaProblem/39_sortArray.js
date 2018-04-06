/*Write a function that takes an array of numbers as arguments and returns an array of numbers represents the original array but sorted by the 
sum of every two opposite elements in the array, the least sum put the two elements toward the middle of the array , the bigger should be toward 
the extremities,
Every two opposite elements means that if one is at index i the opposite should be at index (length-1-i) so element at index 0 is the opposite of 
element at index 6 in 7 elements array.
For example

sortSum([1,5,4,6]); // [5,1,6,4]
sortSum([2,14,6,5,8,17,3]); // [14,6,2,5,3,8,17]
Explanation of last example

2 is opposite to 3,
14=>17,
6 =>8 ,
5 is in the middle=> no opposite element, so now 2 and 3 are toward the middle, then 6 and 8 then 14 and 17 at extremities

I start by slicing the original array in two(excluding the number in the middle, if there is one);
Then I sort the first array so that the bigger number is on the left;
I do the same for the second array(inverted this time);
If there is a middle number concat it to the arrays;
If not just concat the both arrays and return;*/

function sortSum(arr) {
    let aux1 = arr.slice(0, Math.floor(arr.length / 2));
    let aux2 = arr.slice(Math.ceil(arr.length / 2));
    if(arr.length%2===0)
        return aux1.sort((a, b) => a < b).concat(aux2.sort((a, b) => a > b));
    else
        return aux1.sort((a, b) => a < b).concat([arr[Math.floor(arr.length / 2)]]).concat(aux2.sort((a, b) => a > b));
}

console.log(sortSum([1,5,4,6])); // [5,1,6.4]
console.log(sortSum([2,14,6,5,8,17,3])); // [14,6,2,5,3,8,17]
console.log(sortSum([0,1,10,2,6,17,5,14,8,3,22,1,2])); // [10, 17, 6, 2, 0, 1, 5, 1, 2, 3, 8, 14, 22]

function sortSu(arr) {
  let temp;
  let flag = true;    

  while (flag) {
    flag = false;
    for (let i = 1, j = arr.length; i+1 < j-1; i++) {
      if (arr[i] + arr[arr.length-i-1] > arr[i-1] + arr[arr.length-i]) {
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[arr.length-i];
        arr[arr.length-i] = temp;
        flag = true;
      }
      j--;    
    }    
  } 
  return arr;
}

console.log(sortSu([1,5,4,6])); // [5,1,6.4]
console.log(sortSu([2,14,6,5,8,17,3])); // [14,6,2,5,3,8,17]
console.log(sortSu([0,1,10,2,6,17,5,14,8,3,22,1,2])); // [10, 17, 6, 2, 0, 1, 5, 1, 2, 3, 8, 14, 22]

function sortS(arr) {
  let temp;
  let swapped = true;     // whether any elements have been swapped in the current iteration of the while loop
  let end = arr.length / 2 - 1;   // variable end for the "for" loop
  
  // iterate until elements are already in order (no need for new swaps)
  while (swapped) {
    swapped = false;
    for (let i = 1; i <= end; i++) {
      // compare sum of (current element, its opposite) with sum of (previous element, its opposite)
      if (arr[i] + arr[arr.length-i-1] > arr[i-1] + arr[arr.length-i]) {
        // swap the two pairs of elements
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[arr.length-i];
        arr[arr.length-i] = temp;
        swapped = true;
      }
    }
    // last (closest to middle of array) element is already the minimum after this iteration
    // it does not need to be checked again in the next iteration 
    end--;  
  }
  
  return arr;
}

console.log(sortS([1,5,4,6])); // [5,1,6.4]
console.log(sortS([2,14,6,5,8,17,3])); // [14,6,2,5,3,8,17]
console.log(sortS([0,1,10,2,6,17,5,14,8,3,22,1,2])); // [10, 17, 6, 2, 0, 1, 5, 1, 2, 3, 8, 14, 22]

const sortSm = arr => {
  // store result
  const result = [];
  // Store each opposite numbers
  const subGroups = [];
  // It will remain undefined if array has even number of elements
  let midElement;
 

  // If array has odd number of length
  if (arr.length % 2 !== 0) {
    // Store the middle array element
    midElement = arr[Math.floor(arr.length / 2)];
    // Remove it from the given array
    arr.splice(Math.floor(arr.length / 2), 1);
    
  }

  // Assign all numbers to the 0, Like reserved places
  for (let i = 0; i < arr.length; i++) {
    result[i] = 0;
  }
  
  // Push each opposite numbers as an array into subGroups
  for (let i = 0; i < arr.length; i += 2) {
    subGroups.push([arr[i], arr[arr.length - 1 - i]]);
  }

  // To store current largest number pair
  let largest = 0;
  // Where to place in result array
  let index = 0;
  // Where largest two was found
  let foundAt;
  // First number of number pair
  let largest1;
  // Second number of number pair
  let largest2;
  while (subGroups.length !== 0) {
    // Assign it to the lowest value
    largest = 0;
    // Go through subGroups
    for (let i = 0; i < subGroups.length; i++) {
      // If number pairs are greater than current largest
      if (subGroups[i][0] + subGroups[i][1] > largest) {
        // Store the index to add later into result
        foundAt = i;
        // Store it into largest to test it against next number pairs
        largest = subGroups[i][0] + subGroups[i][1];
        // First
        largest1 = subGroups[i][0];
        // Second
        largest2 = subGroups[i][1];
      }
    }

    // Put it at the whatever index at it is
    result[index] = largest1;
    // Put it's pair at the opposite index
    result[result.length - 1 - index] = largest2;
    // Remove that container array of those pairs
    subGroups.splice(foundAt, 1);
    // Increase array to not override
    index++;
  }
  // Array is completely assigned
  // Except if it had odd number of elements then insert previous middle element into the middle again

  // If array had odd number of elements then this will not be undefined so it evaluate to true
  if (midElement) {
    // Insert value of midElement at the middle of the array
    result.splice(Math.floor(arr.length / 2), 0, midElement);
  }
  
  return result;
};

console.log(sortSm([1,5,4,6])); // [5,1,6.4]
console.log(sortSm([2,14,6,5,8,17,3])); // [14,6,2,5,3,8,17]
console.log(sortSm([0,1,10,2,6,17,5,14,8,3,22,1,2])); // [10, 17, 6, 2, 0, 1, 5, 1, 2, 3, 8, 14, 22]
