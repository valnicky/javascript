/*Write a function that takes an object with alphabetical letter or numerical keys as argument , the function should sort the keys but still 
every key should point to the same value after sorting

For example
sortOb({d:"John", t:"Mark", a:"Antony"}) // {a:"Antony",d:"John",t:"Mark"}
sortOb({3:"Go to work",1:"wake up", 2:"Breakfast"}) // {1:"Wake up", 2:"Breakfast",3:"Go to work"}


Object passed to sortOb.
key variable defined which contains all the objects name. As the Object.keys method returns array, the next method sorts it.
output object variable initialised.
for loop set to run across the key array length. Within each index, the output object is given the value of the name:value at the input objects 
value. The name is the incremented index value stored in the array key.output variable returned from function.
*/
 function sortOb(obj) {
      let key = Object.keys(obj).sort();
      let output = {};

      for(let i=0, keyLength = key.length; i<keyLength; i++) {
        output[key[i]] = obj[key[i]];
      }
      
      return output;
    }


console.log(sortOb({3:"Go to work",1:"wake up", 2:"Breakfast"})); // {1:"wake up", 2:"Breakfast",3:"Go to work"}