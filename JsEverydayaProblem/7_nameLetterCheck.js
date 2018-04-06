/*
check if your name characters present in a given string
Write a function that takes a string as an argument represents your name 
that checks if all your name characters presents in this string
 "hello all my great friends";
For example:
check("karl"); // false
check("sally"); // true
*/

let str= "hello all my great friends";
let bool;
function check(name){
  let str1=str.toLowerCase().split("");
  bool = "";
  for(let i=0; i<name.length;i++){
    if(str.indexOf(name[i])>-1){
    
      bool += "true";

    }else{
    bool += "false";
      }
  }

  if(bool.indexOf("false")>-1){
    bool = false;
  }else{
    bool = true;
  }
  return bool;
}

console.log(check("karl")); // false
console.log(check("sally")); // true