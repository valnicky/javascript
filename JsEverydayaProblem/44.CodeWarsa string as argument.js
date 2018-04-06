/*Write a function that takes a string as argument and returns true or false depending on the following

true: if the string is a valid word
false: if the string is not valid word

the function should return true with “abcdabcd” because all characters has same occurence this is the same with the string “abcd” so they are
 both valid words

and it should return false with this string abcdab because a nd b are repeated twice while the rest of characters are not so it is not a valid
 word
 If string is only 1 character return true
Create an object and a counter variable
Iterate through string and add into object
Iterate through object and if any value is different it will return false*/


function check(str){

	let str = str.toLowerCase();
	const len = str.length;
	if (len === 1) return true;

	let obj = {};
	let counter = 0;

	for(let i = 0; i < len; i++){
		if(!obj[str[i]]) obj[str[i]] = 1;
		else obj[str[i]] += 1;
	}

	for(let item in obj){
		if (obj.hasOwnProperty(item)) {
			if(counter === 0)	counter = obj[item];
			else if(obj[item] !== counter) return false;
   		 }
	}
	
	
	return true;
}

/*Create an array of chars out of string
Create new Set based on chars array (set == no duplicates)
Calculate correct number of character occurences in the string (Number of chars in orginal array divided by number of chars in set)
Iteratre through set and check if number of char occurences in chars array equals correct number of occurences (if not - change value of the flag answer to false)*/

function checkVal(text) {

    const chars = text.split('');
    const uniqueChars = new Set(chars);
    const correctNumOfOccurences = Math.ceil(chars.length / uniqueChars.size);
    let answer = true;
  
    uniqueChars.forEach(e => {
        if (chars.filter(char => char === e).length !== correctNumOfOccurences) {
            answer = false;
        }
    })

    return answer;
}

console.log(checkVal('abcdabcd')); // true
console.log(checkVal('abcd')); // true
console.log(checkVal('abcdab')); // false



