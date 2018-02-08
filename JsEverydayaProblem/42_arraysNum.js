/*Write a function that takes an array of numbers as argument and returns a string of alphabetical letters every alphabetical letter should be chosen by this pattern

From 1-26 a-z
Less than 1 a
More than 26 z

Every number in input should represent the alphabetical position of the letter in alphabetical system, if the number is less than 1 the letter is a , if bigger than 26 the letter should be z.

For example

numToAlphabet([0,1,2,3,4]);//aabcd
numToAlphabet([13,100,25,20,-1])//mzyta*/

const numToAlphabet = arr => arr.map(element => element <= 0 ? 'a' : element > 26 ? 'z' : String.fromCharCode(element + 96)).join("");


function numToAlphabet(arr){
	let str = '';
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < 1) str += 'a';
		else if(arr[i] > 26) str += 'z';
		else{
			str += (arr[i] + 9).toString(36);
		}
	}
	return str;
}

const numToAlphabet = arr => {
  // a -> 97 z -> 122
  let firstLetterCode = 96;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 26) {
      result.push('z');
    }
    else if (arr[i] <= 1) {
      result.push('a');
    }
    else {
      result.push(String.fromCharCode(firstLetterCode + arr[i]));
    }
  }
  return result.join('');
};