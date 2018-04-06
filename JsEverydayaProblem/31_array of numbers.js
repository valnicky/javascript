/*Write a function that takes an array of numbers and checks if all numbers in array has the same first decimal number, returns true and false
For example

checkDecimal([5.5 , 2.53 , 9.5 , 5.59 , 6.5 , 5.57]) // true
checkDecimal([2.25 , 3.30 , 2.28 , 3.2]) // false*/

function checkDecimal(arr) {
    let newarr = arr.map(x => parseInt((x*10)%10));
    return newarr.filter(x => x===newarr[0]).length === newarr.length;
}

console.log(checkDecimal([5.5 , 2.53 , 9.5 , 5.59 , 6.5 , 5.57])); // true
console.log(checkDecimal([2.25 , 3.30 , 2.28 , 3.2])); // false*/