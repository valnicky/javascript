/*A number N is perfect if it is equal to the sum of its proper divisors (below N):
28 == 1 + 2 + 4 + 7 + 14
28 is a perfect number.

A number N is abundant if it is smaller than the sum of its proper divisors (below N):
12 < 1 + 2 + 3 + 4 + 6


A number N is deficient if it is bigger than the sum of its proper divisors (below N):
9 > 1 + 3

Write a function "isPerfect" that will return the type of the number you pass into it.
console.log(isPerfect(12)) // Abundant
console.log(isPerfect(9)) // Deficient
console.log(isPerfect(28)) // Perfect*/

function isPerfect(num) {
  let nums = [];
  for (let i = 1; i < num; i++) {
    if (num%i===0) {
      nums.push(i)
    }
  }
  let x = nums.reduce((sum, current) => sum + current, 0);
  if (num === x) {
      return 'Perfect'
  } else if (num < x){
      return 'Abundant'
  } else {
      return 'Deficient'
  }
}

console.log(isPerfect(12)) // Abundant
console.log(isPerfect(9)) // Deficient
console.log(isPerfect(28)) // Perfect



// *Edit:* If you want to go a bit further:
// Make a function that returns 3 different lists of numbers below K.
// A→will list all Abundant numbers
// D→will list all Deficient numbers
// P→will list all Perfect numbers