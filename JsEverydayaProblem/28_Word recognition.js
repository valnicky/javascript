/*Word recognition
Write a function that takes two arguments the first is an array of words and the second is a word and returns array of words containing all words 
that includes all letters of the second argument in the same order of letters, your program should be able recognize the word in a mess of letters
 :wink:
For example

wordRecog(["true","trea","track","utre"],"true") //["true"]
wordRecog(["drows","words","wtorssds","downward"],"word")// ["words","wtorssds"]*/


function wordRecog(arr, str) {
  const pattern = [...str].join('\\w*');
  const regexp = new RegExp(`\\b\\w*${pattern}\\w*\\b`);
  return arr.filter(word => word.match(regexp));
}

console.log(wordRecog(["true","trea","track","utre"],"true")); //["true"]
console.log(wordRecog(["drows","words","wtorssds","downward"],"word"));// ["words","wtorssds"]


function wordReco(a,b){
 return a.filter (word => [...b].every((c,i)=> word.indexOf(c) >= i))
}

console.log(wordReco(["true","trea","track","utre"],"true"))
console.log(wordReco(["drows","words","wtorssds","downward"],"word"))