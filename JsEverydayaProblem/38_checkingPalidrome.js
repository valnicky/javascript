Palindrome definition: a word, line, verse, number, sentence, etc., reading the same backward as forward, as Madam,racecar and wow.

Write a function that takes a string and returns true or false depending on the following

if the string is palindrome, return true;
false if not palindrome
For Example

checkPalindrome("reeR") // true
checkPalindrome("re er"); // true
checkPalindrome("%r@**e##er"); // true
checkPalindrome("rere")  // false
checkPalindrome("level")  // true



const checkPalindrome = input => {
  input = input.toLowerCase().replace(/[^\w\s]|_/g, "");
  return input === input.split('').reverse().join('');
}

console.log(checkPalindrome("reeR")) // true
console.log(checkPalindrome("re er")) // true
console.log(checkPalindrome("rere"))  // false
console.log(checkPalindrome("%r@**e##er")) // true
console.log(checkPalindrome("level"))  // true


Direct strict comparison of the input string which has special characters replaced and converted to lower case against input string which has special characters replaced and converted to lower case and reversed. This gives true if the same and false if not which are returned from function.

function checkPalindrome(str) { 
    return str.replace(/[\W_]+/g, '').toLowerCase() === str.replace(/[\W_]+/g, '').toLowerCase().split('').reverse().join('');
 }
