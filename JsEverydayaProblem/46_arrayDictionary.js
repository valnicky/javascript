 /*arrayDictionary = ["and ", " such ", "want", "learn", "Angular.jsss" , " Portugal ", " my ", " live", "in ", "React.jsss", " udacity", "house", 
 " go ", "a", "course"]; arrayPhrases = [" I want to learn JavaScript fr…*/


 function searchWords(dictionary, phrases) {
	let dic = dictionary.map(a => a.trim());
	let phrase = phrases.join(' | ').replace(/\.\s/gi,' . ').split(' ').filter(a => {return a;});
    for(let i = 0; i < phrase.length; i++){
      let l = phrase[i][0].toUpperCase();
      if (dic.indexOf(phrase[i]) < 0) {    
        phrase[i] = '['+ phrase[i].replace(phrase[i][0],l) +']';
      }else{
        phrase[i] = phrase[i].replace(phrase[i][0],l);
      }
    }
  phrase = phrase.join(' ').replace(/\s+\[\.\]./gi,'[.]').replace(/udacity/gi,'UDACITY').split('[|]').map(e => {return e.trim();});
  return phrase;
}


function removeBlankSpaces(phrase) {
	let phraseAux = phrase + " ";
	let newPhrase = "";

	while (phraseAux.length > 0) {
		if (phraseAux.substring(0, 1) === " ") {
			phraseAux = phraseAux.substring(1);
			continue;
		}

		newPhrase += phraseAux.substring(0, phraseAux.indexOf(" ") + 1);
		phraseAux = phraseAux.substring(phraseAux.indexOf(" ") + 1);
	}

	return newPhrase;
}
	
function isWordInDict(dictionary, word) {
	for (let index = 0; index < dictionary.length; index++) {
		if ((dictionary[index].length === word.length) && (dictionary[index] === word)) { return true; }
	}

	return false;
}
	
function searchWords(dictionary, arrayPhrases) {
	let arrayOutput = [];

	for (let index = 0; index < dictionary.length; index++) {
		dictionary[index] = dictionary[index].trim();
	}

	for (let index = 0; index < arrayPhrases.length; index++) {
		let phrase = removeBlankSpaces(arrayPhrases[index]);
		let newPhrase = "";

		while (phrase.length > 0) {
			word = phrase.substring(0, phrase.indexOf(" "));
			if (!isWordInDict(dictionary, word)) {
				word = (word.toLowerCase() === "udacity") ? word.toUpperCase() : word[0].toUpperCase() + word.substring(1);
				newPhrase += "[" + word + "] ";
			}
			else {
				word = (word.toLowerCase() === "udacity") ? word.toUpperCase() : word[0].toUpperCase() + word.substring(1);
				newPhrase += word + " ";
			}
			phrase = phrase.substring(phrase.indexOf(" ") + 1);
		}

		arrayOutput.push(newPhrase.substring(0, newPhrase.length - 1));
	}

	return arrayOutput;
}
	
console.log(searchWords(["and  ", "   such ", "want", "learn", "Angular.jsss" , "   Portugal  ", " my ", " live", "in ", "React.jsss", " udacity", "house", "  go   ", "a", "course"], ["  I want to learn  JavaScript frameworks such as Angular.js   and   React.js   ", " I live in portugal in my house ", "  I want    to go england   and I  have a house in Portugal ", " I have  learned a  lot   in udacity     course   ."]));
