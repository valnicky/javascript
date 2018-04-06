/*Write a function that takes an array of numbers (integers) from 0-9 and returns a string of those numbers in the form of a random phone number in every call , the results are imaginary phone numbers (keys, number)

For example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])//  "(123) 456-0887"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])// "(432) 544-7219"*/

 function createPhoneNumber(arr) {
    	let str = arr.sort(function(a,b) { return Math.round(Math.random()) - 0.5; }).join("");
    	return "(" + str.slice(0, 3) + ") " + str.slice(3, 6) + "-" + str.slice(6);
    }



    function createPhoneNumber(numbers){
  var demo = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    demo = demo.replace('x', numbers[Math.floor(Math.random() * numbers.length)]);
  }
  
  return demo;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));//  "(123) 456-0887"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "(432) 544-7219"*/