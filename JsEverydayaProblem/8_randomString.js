/*Write a function that takes a number as an argument and returns a string represents random characters present in a given string, number of characters of string returned should be the same with the number value of the argument.

characters are just letters, spaces should not be considered.

The given string

"Hi all udacity students"
Examples

numChars(5); // uyhsa
numChars(5); // hadln
numchars(7);  // sdlituh
With every call of of the function, it returns different results(random characters)*/


function numChars(num){
  const str= "Hi all udacity students";
let arr= str.split(' ').join('').toLowerCase();//split the string into an array, and changed to lowerCase
let word="";
if(num>0 && !isNaN(num)){
  for(let i=0; i<num; i++){
    word += arr.charAt(Math.floor(Math.random()*arr.length));
  }
  return word; }
}


