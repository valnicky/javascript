function checkPalindrome(inputString) {
    let len = inputString.length; 
    let medio = len/2 ;
    let medCeil = Math.floor(medio); 
    let word1 = inputString.substring(0, medio);
    let word2;
    let bool = false;
    let reverseWord = '';


if(len > 1){    
    if(len % 2 == 0){
        word2 = inputString.substring(medio, len+1);
    }else if(len % 2 != 0){
        word2 = inputString.substring(medio+1, len+1);
    }
    
     for (let i = (word2.length+1 ); i >= 0; i--) {
            reverseWord += word2.charAt(i);
    }
    //console.log(word2.length);
    //console.log(reverseWord);
    //console.log(word1);
    if(word1 == reverseWord){
        bool = true;
    }

//if it has only one letter it is true
 }else  if(len == 1){
        bool = true;
    }
    return bool;

   }

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
console.log(checkPalindrome("apapa"));
console.log(checkPalindrome("paap"));
