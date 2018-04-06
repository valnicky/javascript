/*write a function that takes two arguments,the first represents a flattened array and the second is a number
the function should covert the array to a Two dimensional one, every array inside have a length equal to the number that passed as argument if
 there are still excess elements
For example

grouping([1,2,3,4,5,6],3);  // [[1,2,3],[4,5,6]]
grouping([6,8,10,15,4],2) //  [[6,8],[10,15],[4]]
grouping([12,8,15,20,38,40,60],7) // [[12,8,15,20,38,40,60]]
grouping([1,2],4)   // [[1,2]]
*/

function splitArray (arr, size) {

  let result = [];

  while (arr.length > 0) {
      result.push(arr.splice(0, size));
  }
  return result;
}

console.log(splitArray([1,2,3,4,5,6],3));  // [ [1,2,3] , [4,5,6] ]
console.log(splitArray([6,8,10,15,4],2));  // [ [6,8] , [10,15] , [4] ]
console.log(splitArray([12,8,15,20,38,40,60],7));  //  [[12,8,15,20,38,40,60]]
console.log(splitArray([1,2],4)); // [[1,2]]


/*When looping through the array, if the index of Ith element is multiple of the desired lenght of the chunks, then group the elements in an array
of n elements, else return a false value (0).
Then only return the true values.*/

const grouping = (arr, n) => arr.map((e, i) => !(i % n) ? arr.slice(i, i + n) : 0).filter(e => e);

console.log(grouping([1,2,3,4,5,6],3))  // [[1,2,3],[4,5,6]]
console.log(grouping([6,8,10,15,4],2)) //  [[6,8],[10,15],[4]]
console.log(grouping([12,8,15,20,38,40,60],7)) // [[12,8,15,20,38,40,60]]
console.log(grouping([1,2],4))   // [[1,2]]