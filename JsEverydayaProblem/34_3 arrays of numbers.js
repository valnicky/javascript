Write a function that takes 3 arrays of numbers as arguments and returns true or false according to the following

true if the first and seconds array has the same elements in the same indexes so they should be the same length and the third array can have a bigger length but still have the same elements in the same indexes of the first and second one

false if not

For examples

checkArr([1,2,3],[1,2,3],[1,2,3]) // true
checkArr([1,2,3],[1,2,3],[1,2,3,4,5,6]) // true
checkArr([1,2,3],[1,3,3],[1,2,3,4,5,6]) // false
checkArr([1,2,3],[1,2,3],[1,2])  // false


function checkArr(arr, arrS, arrT){
	if(arr.length !== arrS.length || arrT.length < arr.length) return false;
    for(let i = 0; i < arr.length; i++){
		if(arr.indexOf(arr[i]) !== arrS.indexOf(arrS[i]) || arr.indexOf(arr[i]) !== arrT.indexOf(arrT[i])) return false;
	}
	return true;
}


const checkArr = (fst, sec, trd) => 
  fst.reduce((result, n, i) => 
  (fst[i] !== sec[i] || fst[i] !== trd[i]) ? false : result, true); 

console.log(checkArr([1,2,3],[1,2,3],[1,2,3])); // true
console.log(checkArr([1,2,3],[1,2,3],[1,2,3,4,5,6])); // true
console.log(checkArr([1,2,3],[1,3,3],[1,2,3,4,5,6])); // false
console.log(checkArr([1,2,3],[1,2,3],[1,2]));  // false