/*Crazy String
Write a function that takes a string as an argument and returns another string exactly like the examples below

strManip("abcd")    // AbAc-BcBd-CdC-DD
strManip("hello")  // HeHl-ElEl-LlLo-LoL-OO
strManip("hi")    // HiH-II
strManip("A")    // AA
strManip("cAt") // CaCt-AtA-TT*/


const pattern = (currentChar, nextChar = '', next2Char = '') => {
    return currentChar.toUpperCase() + nextChar.toLowerCase() + currentChar.toUpperCase() + next2Char.toLowerCase();
}

const crazyStr = str => {
    let parts = [];
    for (let i = 0; i < str.length; i++) {
        parts.push(pattern(str[i], str[i + 1], str[i + 2]));
    }
    return parts.join('-');
}



I created two functions:

pattern function creates the specific pattern. It needs a string character and its two following characters.

crazyStr function iterates over a string and generates the pattern for every character (using pattern function). It collects all patterns in a single string and finally concatenates all patterns using ‘-’ symbol as separator.

Edit: parameters assignations in pattern function (nextChar = '') prevent undefined values. So when nexChar is undefined, then it takes an empty string value ('').