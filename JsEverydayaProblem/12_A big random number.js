/*A big random number
Write a function that takes an array of two elements (numbers < 10) as argument, and returns a number composed of all the numbers between the two 
numbers with minimum and maximum numbers inclusives randomly every time you call the function, numbers that composes our returned number should be 
ifferent( no repeated numbers) and number of these numbers should be the same with the numbers in all range between the maximum and minimum number 
in array, with minimum and maximum inclusive, the array is not sorted so no strict places for maximum or minimum number in it

Really i have wrote tons of word “number” so it may be confusing, lets jump to examples :grinning:

for example

randomNum([1,5]);  // 45132
randomNum([5,1]);  // 31452
randomNum([0,9]); // 7429850136
randomNum([0,9])  // 5682910347*/

function randomNum(arr) {
  // Determine min and max for the 2 numbers
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  
  if (min < 0 || max > 9) return undefined;
  
  let result = '';
  let sortedArr = [];
  let rand;
  
  // Generate Sorted array containing numbers between min and max
  for (let i = min; i <= max; i++) {
    sortedArr.push(i);
  }
  
  // Fill result array
  for (let i = min; i <= max; i++) {
    // Generate random number between 0 and length of sortedArr
    // that will be used to select a random element from sortedArr
    rand = Math.floor(Math.random() * sortedArr.length);
    result += sortedArr[rand];
    // Remove used element from sortedArr
    sortedArr.splice(rand, 1);
  }
  return result;
}

console.log(randomNum([1, 5]));
console.log(randomNum([5, 1]));
console.log(randomNum([0, 9]));
console.log(randomNum([9, 0]));


function randNum(arr){
	let newArr = [];
	for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
		newArr.push(i);
	}
 	return newArr.sort(() => Math.random() - 0.5).join('');
}

console.log(randNum([1, 5]));
console.log(randNum([5, 1]));
console.log(randNum([0, 9]));
console.log(randNum([9, 0]));
