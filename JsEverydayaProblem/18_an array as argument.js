Write a function that takes an array as argument, and returns true or false depending on the following

Returns true if the first half of the array is containing the same elements present in the last half, and false if it does not

If the array contains odd number elements ,the function returns true if the two parts around the middle element contain the same elements

Elements in the two parts are not necessary to be in the same order

For example

check([1,4,6,8,8,6,1,4]); // true
check(["a","b","d","g","f","b","g","d","a"])  // true
check(["a","b","d","g","f","b","g","f","a"]);// false
check([10,20,30,40,10,20,50])  // false


function check(arr) {
  // Split array into firstHalf and lastHalf
  let firstHalf = arr.slice(0, arr.length/2);
  let lastHalf = arr.slice((arr.length+1)/2);
  
  for (let i = 0; i < firstHalf.length; i++) {
    // If element from firstHalf is not present in lastHalf
    if (lastHalf.indexOf(firstHalf[i]) === -1)
      return false;
  }
  
  // If all elements from firstHalf were found in lastHalf
  return true;
}


calculate middle
compare first part (slice array from start til middle, sort, create string) and second part (slice array from end, sort, create stri


 function check(arr) {
          var middle = Math.floor(arr.length/2);
          return arr.slice(0,middle).join("") === arr.slice( - middle).sort().join("");
     }