
/*ask user for a phrase to check
if the entry is invalid  - alert and exit function with a failure report
}otherwize{
	
make a counter for the E's
for each character in the user 's entry
if the character is an E or an 'e' increment the counter


}} alert the amount of es in the phrase and return success


*/


function countEs(phrase){
//et phrase = ('Which phrase would you like to examine?');
	if(typeof(phrase) != "string"){
		console.log("That's not a valid entry!");
//return false;
	} else {
		let count = 0;
		for(let index = 0; index < phrase.length; index++){
			if(phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E'){
				count++;
				
			}
		}
		return console.log('It has ' + count + " e");
	}
	
}

countEs('Heeeeelllooooo');
countEs('Hi, we will go on Wendnesday!!!');
countEs('Eeeeeeeee');