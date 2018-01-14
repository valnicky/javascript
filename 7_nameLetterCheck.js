
/*
check if your name characters present in a given string
Write a function that takes a a string as an argument represents your name 
that checks if all your name characters presents in this string
 "hello all my great friends";
For example:
check("karl"); // false
check("sally"); // true
*/



var str= "hello all my great friends";
var bool;
function check(name){
  var str1=str.toLowerCase().split("");
  for(var i=0; i<name.length;i++){
    if(str.indexOf(name[i])>-1){
      bool += "true";
    }else{
    bool += "false";
      }
  }
  if(bool.indexOf("false")>-1){bool = false;}else{bool = true;}
  return bool;
}
check("karl"); // false
check("sally"); // true