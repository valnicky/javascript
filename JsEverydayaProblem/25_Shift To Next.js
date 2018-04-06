/*Shift To Next
Write a function that takes a string as argument and returns a string after following modification
Getting the first letter in the string, then searching all words in string containing this letter, if it is present in a word, shift it to the 
next word in the same index of it in the original one, if the next word index that should the letter shifted to is not existed , skip it
lets jump to examples :slightly_smiling_face:

shiftToNext("Every day a problem "); // very Eday a problem
shiftToNext("hello i will be there in one hour!!");// ello hi will be tere ihn one hour!!
shiftToNext("paul knows how to keep a cat!!");//aul pknows how to keep a cat!!
*/

function shiftToNext(str) {
  // Remove punctuation and trailing spaces and convert string to array
  let arr = str.replace(/[.,!?]/g,'').replace(/\s+$/,'').split(' ');
  let letter = str[0];    // First letter
  let j;
  
  // Loop from second last word to the first word, to avoid checking words that have already been modified
  for (let i = arr.length - 2; i >= 0; i--) {
    // Loop until minimum of (length of current word, length of next word)
    j = 0;
    while (j < Math.min(arr[i].length, arr[i+1].length)) {
      if (arr[i][j] === letter) {
        // If first letter is found in current word, it will be removed, no need to increment j
        arr[i] = arr[i].substring(0,j) + arr[i].substring(j+1);
        arr[i+1] = arr[i+1].substring(0,j) + letter + arr[i+1].substring(j);
      } else {
        j++;
      }
    }
  }
  
  return arr.join(' ');
}

console.log(shiftToNext("Every day a problem ")); // very Eday a problem
console.log(shiftToNext("hello i will be there in one hour!!"));// ello hi will be tere ihn one hour
console.log(shiftToNext("paul knows how to keep a cat!!"));//aul pknows how to keep a cat!!

/*String passed to function shiftToNext.
Input string converted to an array and stored in variable strArr. (Alongside removing additional spaces at front and end of string).
shiftToIndex which shows how much a character should move in the next word, firstChar which stores the first character which will be compared and 
output array variables initialised.for loop set to run across the size of the array variable (strArr).
If the current word in the array has the charcter being searched (firstChar) and the next word in the array strArr is present then enter this 
conditional statement.The index of the character being searched is found stored in shiftToIndex.
If the next word in the array has that index present, then add the current word with the character in with that letter removed to the output array 
variable. Otherwise, the next word doesn’t have that index so the current word should be added to output variable without removing the character.
If the next word in the strArr array exists and contains the index value, then add the word with the character in that index to the output array
 variable.Else, outside of the if statement in step 5, if the output variable at the current for loop index i is not present, add the current word
  into the output variable.Outside the for loop, the output variable is converted to a string (separated by space) and returned from the function.*/

function shiftToNex(str) {
  let strArr = str.trim().split(" ");
  let shiftToIndex = -1;
  let firstChar = str.charAt(0);
  let output = [];

  for (let i=0; i<strArr.length; i++){
    if(strArr[i].indexOf(firstChar) !== -1 && strArr[i+1]!== undefined) {
      shiftToIndex = strArr[i].indexOf(firstChar);
      
      if (strArr[i+1].length > shiftToIndex) {
        output[i] = strArr[i].substr(0, shiftToIndex) + strArr[i].substr(shiftToIndex + 1, strArr[i].length-shiftToIndex);
      }
      else {
        output[i] = strArr[i];
      }
      if (strArr[i+1] !== undefined && strArr[i+1].length > shiftToIndex) {
        output[i+1] = strArr[i+1].substr(0, shiftToIndex) + firstChar + strArr[i+1].substr(shiftToIndex, strArr[i+1].length-shiftToIndex);
      }
    }
    else {
      if (output[i] === undefined) {
        output[i] = strArr[i];
      }
    }
  }
  
  return output.join(" ");
}

console.log(shiftToNex("Every day a problem ")); // very Eday a problem
console.log(shiftToNex("hello i will be there in one hour!!"));// ello hi will be tere ihn one hour
console.log(shiftToNex("paul knows how to keep a cat!!"));//aul pknows how to keep a cat!!
