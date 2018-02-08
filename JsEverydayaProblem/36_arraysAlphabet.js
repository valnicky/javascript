Write a function that takes two arrays of alphabetical letters as arguments (the letters are small or capital not both) and returns an array represents all letters in both arrays but sorted alphabetically from a-z or A-Z, the two arrays are already sorted, no need to sort them

Note:do not consider sort() method
For example:

sort(["a","d","x","z"],["b","g","j","s","t"]) // ["a", "b", "d", "g", "j", "s", "t", "x", "z"]
sort(["A","X","Y","Z",],["B","F","G","Y","Z"]) //  ["A", "B", "F", "G", "X", "Y", "Y", "Z", "Z"]



Concatenate both arrays
Loop through twice
Check if current value is bigger than the next value - if yes assign the next value into swap variable, next index of the array is assigned the value of current index and current index is assigned the swap value


function sort(arr, arrN)
{
	let array = arr.concat(arrN);

    for (let i = 0; i < array.length - 1; i++){
        for (let j = i; j < array.length - 1; j++){
            if (array[i] > array[j]){
                let swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }

    return array;
}


function sort(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  
  // loop through arr1 and arr2 until reaching the end of one of these arrays
  while (i < arr1.length && j < arr2.length) {
    // add the smallest of (arr1[i], arr2[j]) to result
    // increment counter in the array where the smallest was found
    arr1[i] < arr2[j] ? (result.push(arr1[i]), i++) : (result.push(arr2[j]), j++); 
  }
  
  // add remaining elements (from the array whose end has not been reached) to result
  return result.concat(i === arr1.length ? arr2.slice(j) : arr1.slice(i));
}