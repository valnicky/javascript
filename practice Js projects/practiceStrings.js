var text = "The quick brown fox jumped over the lazy log.";
//Print the number of characters are in the string
console.log(text.length);

//Print the position of “jumped” within the string
console.log(text.indexOf("jumped"));

//Print the position of “box” within the string
console.log(text.indexOf("box"));

//Create a list of the words in the string
let li = text.split(' ');
console.log(li);

//Create a new string with the words separated by the | character using the list of words
console.log(li.join('|'));

//Use a for loop to count the number of “e” characters in the string.
let letters= li.join('');
let count = 0;
for(let i = 0; i < letters.length ;i++){
	if(letters[i] === 'e'){
		count ++;
	}
	
}

console.log("There are " + count + " e in the phrase");