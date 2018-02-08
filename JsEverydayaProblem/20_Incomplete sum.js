Incomplete sum
Write a function that takes an array of numbers as argument and return the sum of the largest and smallest numbers and all numbers in between except other numbers found in the array

For example

incompleteSum([2,3,5])   // 11
incompleteSum([3,6,2,1,4]); // 12
incompleteSum([1,3,5,10]); //47
for example the first one we need to get sum of (largest number + smallest number +all numbers in the range between but without numbers that already in the array

the first one
2+4+5 // 3 is excluded as it is already in the array

const incompleteSum = array => {
  const max = Math.max(...array);
  const min = Math.min(...array);
  let sum = 0;
  
  for(let i=min; i<=max;i++) {
    if(!array.includes(i)) {
      sum += i;
    }
  }
  return min + max + sum;
}

incompleteSum([2,3,5])   // 11
incompleteSum([1,3,5,10]); //47

