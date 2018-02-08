Shift Capital
Write a function that takes two arguments, one represents a string that contains a capital letter that can be anywhere in the string , the second argument is a number represent number of shifts of the capital letter in the string when the function is called, if the index that the capital letter should be shifted to is not present , continue shifting from the beginning :sunglasses:

For example

shiftCapital("Udacity",4) // daciUty
shiftCapital("leaRning",4) // Rleaning
shiftCapital("frienDs",6) // frienDs
shiftCapital("frienDs",3)  // frDiens

At first, it searches for the index of capital letter.
Then it creates a variable with an array of input string.
Then it creates a variable with capital string and also it deletes this letter from previous array.
Then it just creates a new array from the old one.


const shiftCapital = (input, num) => {
	const i = input.search(/[A-Z]/g);
	input = Array.from(input);
	const char = input.splice(i, 1);
	
	if ((i + num) >= input.length) {
		return input.splice(0, (i + num) - input.length).join("") + char + input.join("");
    } else {
		return input.splice(0, i + num).join("") + char + input.join("");
    }
};

create a new string by removing capital letter from original string
calculate new index position
if it’s longer than the given string’s length use another calculation
asemble final string: slice the string without capital letter at new index position and insert capital letter

function shiftCapital(str,num) {
         var newStr = str.replace(str.match(/[A-Z]/),""); 
         var newIndex = (str.indexOf(str.match(/[A-Z]/))+num)%newStr.length;  
         return newStr.substr(0,newIndex) + str.match(/[A-Z]/) + newStr.substr(newIndex);  
   }