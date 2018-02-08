How Much Repeated
Write a function that takes a string as an argument and returns a number represents the frequency of most repeated word in the string, if no one repeated return 1.

For example

numRepeated("thank you, many thanks") // 1
numRepeated("thank you, thank you again"); // 2




 first solution: object
const numRepeated = (str) => {
  const words = str.match(/([A-Z])\w+/gi);
  let counter = {},
      max = 1;
      
  for (let word of words) {
    if (counter[`${word}`]) {
      counter[`${word}`] += 1;
      if (counter[`${word}`] > max) max = counter[`${word}`];
    } else counter[`${word}`] = 1;
  }
  return counter, max;
};

console.log(numRepeated("thank you, many thanks")); // 1
console.log(numRepeated("thank you, thank you again")); // 2
console.log(numRepeated("thank you, Mississippi assassin, thank you again, master assassin, you are definitely the assassin from Mississippi")); // 3


second solution: map
const numRepeated = (str) => {
  const words = str.match(/([A-Z])\w+/gi);
  let counter = new Map(),
      max = 1;
      
  words.forEach(word => {
    if (counter.has(word)) {
      counter.set(word, counter.get(word) + 1);
      if (counter.get(word) > max) max = counter.get(word);
    } else counter.set(word, 1);
  });
  return counter, max;
};

console.log(numRepeated("thank you, many thanks")); // 1
console.log(numRepeated("thank you, thank you again")); // 2
console.log(numRepeated("thank you, Mississippi assassin, thank you again, master assassin, you





const numRepeated = (str) => {
  const words = str.split(/[^a-z]+/i);
  words.forEach((val, i) => {
    let counter = 1,
    index = words.indexOf(val, i + 1);
    while (index !== -1) {
      words.splice(index, 1);
      counter++;
      index = words.indexOf(val, i + 1);
    }
    words[i] = counter;
  });
  
  return Math.max(...words);
};

console.log(numRepeated("thank you, many thanks")); // 1
console.log(numRepeated("thank you, thank you again")); // 2
console.log(numRepeated("thank you, Mississippi assassin, thank you again, master assassin, you are definitely the assassin from Mississippi")); // 3
