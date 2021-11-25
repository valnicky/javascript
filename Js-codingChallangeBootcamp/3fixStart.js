/*Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'*/


function fixStart(str) {
  let pal1 = str.substring(0, 1);

  let a = str.slice(1).replace(new RegExp(pal1, "g"), "*");

  return pal1 + a;
}

document.getElementById("demo").innerHTML = fixStart("axabebee");