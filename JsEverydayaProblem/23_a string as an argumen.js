Write a function that takes a string as an argument and returns the most repeated character in this string(just one), if most repeated characters are more than one(repeated by the same number) return null

For example

mostRepeated("hello")  // l

mostRepeated("Hi javaScript masters"); // a

mostRepeated("Udacity");  // null


function mostRepeated(str) {
  const store = {};
  for (let i = 0; i < str.length; i += 1) {
    const item = str[i];
    if (store[item]) store[item] += 1;
    else store[item] = 1;
  }
  const keys = Object.keys(store);
  const values =  Object.values(store);
  const mr = Math.max(...values);
  const index = values.indexOf(mr);
  return index === values.lastIndexOf(mr) ? keys[index] : null;
}

console.log(mostRepeated("hello"));  // l
console.log(mostRepeated("Hi javaScript masters")); // a
console.log(mostRepeated("Udacity"));  // null


copy string, turn it into array of characters
remove multiples, so array has 1 from each character
count occurence of each character in original string
find highest occurence value
check if there’s more than one letter with the same highest occurence
find the matching index to the highest occurence, return character based on index


function mostRepeated(str){
  let s = str.slice().split(""); 
  let i = s.length;
  while (i--) {
    if (s.indexOf(s[i]) != i || s[i] == " ") {
        s.splice(i,1);
    }
  }
  let reps = [];
  let len = s.length;
  for (let j = 0; j < len; j++) {
    let counter = 0;
    for (let k = 0; k < str.length; k++) {
       if (s[j] === str[k]) {
         counter++;
       }
    }
    reps.push(counter);
  }
  let max = 0;
  for (let m = 0; m < len; m++) {
    if (reps[m] > max) {
      max = reps[m];
    }
  }
  let counter = 0;
  for (let n = 0; n < len; n++) {
    if (max === reps[n]) {
      counter++;
      if (counter > 1) {
        return null;
      }
    }
  }
  for (let p = 0; p < len; p++) {
    if (reps[p] === max) {
      return s[p];
    }

     }
}