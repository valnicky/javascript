/*Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'*/



function MixUp(str1, str2){
let pal = str1.slice(0,2);
  let palFin = str1.slice(2);
  
let pal2 = str2.slice(0,2);
  let pal2Fin = str2.slice(2);
  
  let newStr1 = pal + pal2Fin;
  let newStr2 = pal2 + palFin;
return newStr1 + " "+ newStr2;

}
document.getElementById("demo").innerHTML = MixUp("hey", "hallo");

