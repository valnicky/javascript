Write a function that takes two arrays of numbers as arguments and returns only one array represents all the numbers that are not common between the two arrays excluding the numbers that is divisible by any number that is common between the two arrays(> 1)

note, no repeated element in the final array and the elements should be in the same order in their original arrays
lets jump to examples

filter([1,2,3],[1,2,4]); // [3] as 4 is divisible by 2( the common number)
filter([1,6,2,5,5,8,3,7,8],[2,6,4,4,9,1]) // [5, 3, 7, 9]
the numbers that are not common between the two arrays are 5,5,8,3,7,8,4,4,9 but 8 and 4 are divisible by 2 which is a common number so they are excluded and the result would be [5,3,7,9]

function filter(arr1, arr2) {
  // common elements for the 2 arrays
  // if "1" is a common element, it will not be included here
  let common = [];
  // different elements for the 2 arrays
  // if such an element appears multiple times in arr1 or arr2, it will be included here only once
  let different = [];
  
  // loop through arr1 and sort elements into the common and different arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (arr1[i] != 1) {
        common.push(arr1[i]);
      }
    } else if (!different.includes(arr1[i])) {
      different.push(arr1[i]);
    }
  }
  
  // loop through arr2 and search for elements to be added to different array
  for (let i = 0; i < arr2.length; i++) {
    if (!different.includes(arr2[i]) && !arr1.includes(arr2[i])) {
      different.push(arr2[i]);
    }
  }
  
  // loop through different array and remove elements that are divisible by a common element
  let i = 0;
  let found;        // divisor found for current element?
  while (i < different.length) {
    found = false;
    for (let j = 0; j < common.length; j++) {
      if (different[i] % common[j] === 0) {
        different.splice(i,1);
        found = true;
        break;      // no need to loop to the end of common array if a divisor was found
      }
    }
    if (!found) {   // increment i only if no divisor found (current element not removed)
      i++;
    }
  }
  
  return different;
}

console.log(filter([1,2,3],[1,2,4])); // [3] as 4 is divisible by 2( the common number)
console.log(filter([1,6,2,5,5,8,3,7,8],[2,6,4,4,9,1])); // [5, 3, 7, 9]