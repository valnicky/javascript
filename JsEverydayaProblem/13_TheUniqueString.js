function uniqueStr(...str) {
  var newStr = str.join("").replace(/\s/g, "").split("");
  for (var i = 0; i < newStr.length-1; i++ ) {
    for (var j = i + 1; j < newStr.length; j++) {
      if (newStr[i] === newStr[j]) {
        newStr.splice(j,1);
      }
    }
  }
  return newStr.join(“”);
}




const uniqueStr = (...strings) => {
    // Store result in this array
    const result = [];
    // Hold all of the strings in this array as a one word
    const str = [...strings].join("");

    // Check all of the given string one by one add the ones that don't exist in result array
    for (let i = 0; i < str.length; i++) {
        // indexOf() method returns -1 if it cannot find the given parameter in array
        if (result.indexOf(str[i]) === -1) {
            result.push(str[i]);
        }
    }
    // Lastly replace all of the white space in result, return as one word
    return result.join("").replace(/\s/g, '');
};



create one array from the parameters, remove spaces
in a nested string iterate through the letters, looking for the same letter, if any found remove
return new string


function uniqueStr(...str) {
  var newStr = str.join("").replace(/\s/g, "").split("");
  for (var i = 0; i < newStr.length-1; i++ ) {
    for (var j = i + 1; j < newStr.length; j++) {
      if (newStr[i] === newStr[j]) {
        newStr.splice(j,1);
      }
    }
  }
  return newStr.join(“”);
}