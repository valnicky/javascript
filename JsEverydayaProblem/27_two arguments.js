Write a function that takes two arguments , the first is array of objects and the second is an object and return an array of objects that matches all the values and keys in the object which is the second argument, if no match return (“no match”)

for Example

match([{x:1,y:2},{name:"john",age:22},{x:3,a:4}],{x:1});// [{{x:1,y:2}}]
match([{x:1,y:2},{name:"john",age:22},{x:3,a:4},{x:1,a:5}],{x:1});// [{x:1,y:2},{x:1,a:5}]
match([{x:2,y:2},{name:"john",age:22},{x:3,a:4}],{x:1}); // no match


const match = (arrObj, obj) => {
  const result = [];

  let loopCounter, matchCounter;
  for (let i = 0; i < arrObj.length; i++) {
    loopCounter = matchCounter = 0;
    for (let key in obj) {
      ++loopCounter;
      if (arrObj[i].hasOwnProperty(key) && arrObj[i][key] === obj[key]) {
        ++matchCounter;
      }
    }
    if (loopCounter === matchCounter) {
      result.push(arrObj[i]);
    }
  }
  if (!result.length)
    return 'no match';
  // else
  return result;
};