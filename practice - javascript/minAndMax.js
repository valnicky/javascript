//find min max

function findminmax(arr) {
  let buz = arr[0];
  let baz = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < buz) {
      buz = arr[i];
    }
    
    if(arr[i] > baz){
      baz = arr[i];
    } 
  }
  return ("min " + buz + ",max: "+ baz);

}

console.log(findminmax([4, 8, 9, 1]));
console.log(findminmax([4,8,6,3]));

function sortNums(arr){
  for(let j = 0;j < arr.length-1; j++){
    let max_num = arr[j];
   let max_location = j;
    
  for(let i = j; i < arr.length; i++){
    if(arr[i] > max_num){
      //know max and its index (location)
      max_num = arr[i];
      max_location = i;
    }
  }
  //swap the first and the last
   arr[max_location] = arr[j];
  arr[j] = max_num;
  }
  return arr;
}

console.log(sortNums([4, 8, 9, 1]));
console.log(sortNums([4,8,6,3]));


function sort(arr){
  for(let j = 0; j < arr.length-1; j++){
    let numJ  =  arr[j];
    let indJ = j;
    
  for(let i = j; i < arr.length; i++){
    if(arr[i] > numJ){   //know max num and its index
      numJ = arr[i];
      indJ = i;
    }
  }
  
  //swap the first and the last
  arr[indJ] = arr[j];
  arr[j] = numJ;
  }
  return arr;
}

sort([4,5,7,1,2,6]);


function sortArr(arr){
  for(let j = 0; j < arr.length-1; j++){
    let varJ = arr[j];
    let indJ = j;
    for(let i = j; i < arr.length; i++){
      if(arr[i] > varJ) {
        varJ = arr[i];
        indJ = i;
      }
    }
    //swap
  arr[indJ]  = arr[j];
   arr[j] = varJ;
  }
return arr;
}

sortArr([4,8,7,2,3,9,25]);