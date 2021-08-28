/**We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
 * 
 * Your function should return an array.

*Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).

*rangeOfNumbers should use recursion (call itself) to solve this challenge.

*rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].

*rangeOfNumbers(6, 9) should return [6, 7, 8, 9].

*rangeOfNumbers(4, 4) should return [4].
 */

function rangeOfNumbers(startNum, endNum) {
    if (startNum < 0 || endNum < 0) return;
    let nums = [];

    if (startNum < endNum) {
        //console.log(startNum < endNum);
        let nums = rangeOfNumbers(startNum, endNum - 1);
        nums.push(endNum);
        return nums;
        //console.log(nums);
    } else {
        nums.push(startNum);
        return nums;
        // console.log(nums);
    }

};

rangeOfNumbers(1, 5);
//rangeOfNumbers(6, 9);
rangeOfNumbers(4, 4);
//rangeOfNumbers(5, 8);