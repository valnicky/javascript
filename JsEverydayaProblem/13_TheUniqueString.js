/*Write a function that can take two or more strings as arguments and returns a string represent them all , all characters should be in same order 
in the original string but no duplication in the returned string

For example

uniqueStr("abcd","ahkd") // abcdhk
uniqueStr("rbanr","fzyrc") // rbanfzyc
uniqueStr("every","day","a problem") // evrydapoblm
Note: of Course you know that E and e are different characters*/

/*create one array from the parameters, remove spaces
in a nested string iterate through the letters, looking for the same letter, if any found remove
return new string*/



function uniqueStr() {
    var result = "";
    for (var x = 0; x < arguments.length; x++) 
        for (var y = 0; y < arguments[x].length; y++) {
            var character = arguments[x][y];
            if (character !== " " && !result.includes(character))
                result += character;
        }
    return result;
}

console.log(uniqueStr("abcd", "ahkd"));
// "abcdhk"

console.log(uniqueStr("abcd", "ahkd", "mjab"));
// "abcdhkmj"


function uniqStr() {
  let str = '';
  for (let arg of arguments) {
    str += arg;
  }
  return Array.from(new Set(str)).join('').split(' ').join('');//.replace(/\s/g, '') instead of split join
}

console.log(uniqStr("abcd", "ahkd"));
console.log(uniqStr("abcd", "ahkd", "mjab"));