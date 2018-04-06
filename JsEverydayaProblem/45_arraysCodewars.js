/*The problem of the day(codewars)

Write a function that takes two arrays of numbers and returns one array represent shuffled numbers from both arrays

For example
Note: all numbers are integers
*/


function shuffle(arr1, arr2){
	let arrNew = [];
	for(let i=0; i< arr1.length ; i++){
		arrNew.push(arr1[i]);
	}

	for(let i=0; i< arr2.length ; i++){
		arrNew.push(arr2[i]);
	}

	arrNew.sort(() => Math.random() - 0.5);

	console.log(arrNew);
}

function shuffl(arr1, arr2) {
  let result = [];
  const l = Math.min(arr1.length, arr2.length); // length of the shortest of the two arrays
  
  // loop through arr1 and arr2 until reaching the end of one of these arrays
  for (let i = 0; i < l; i++){
    result.push(arr1[i], arr2[i]);
  }

  // add remaining elements (from the array whose end has not been reached) to result
  return result.concat(l === arr1.length ? arr2.slice(l) : arr1.slice(l));
}


function shuff(first,second){
    
   for( let i = 0 ;i < first.length ; i++){
    
     if((i % 2 !== 0) && second.length){ 
        
        first.splice(i,0,Number(second.splice(0,1).join(""))); 
            
     }
   
   }
   return(first.concat(second));    
}

shuffle([10,30],[20,40]) // [10,20,30,40]
shuffle([1,5,2,4],[6,2,8,3]); // [1,6,5,2,2,8,4,3]

shuffl([10,30],[20,40]) // [10,20,30,40]
shuffl([1,5,2,4],[6,2,8,3]); // [1,6,5,2,2,8,4,3]

shuff([10,30],[20,40]) // [10,20,30,40]
shuff([1,5,2,4],[6,2,8,3]); // [1,6,5,2,2,8,4,3]
