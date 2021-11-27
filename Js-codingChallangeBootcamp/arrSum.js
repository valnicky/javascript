/**given an array write a function name arrSum that takes an array and return the sum of the array items */

function arrSum(arr){
    let arrSum = 0;
    for(let i = 0; i < arr.length; i++){
        arrSum += arr[i];
    }
    return arrSum;
}


/*using forEach
arr.forEach((item) =>{sum+= item})
*/
/** using reduce 
return arr.reduce((sum, reduce) => {
    return sum +current;
}, 0)
 */

arrSum([1,2,3,4]);//10
arrSum([2,4,5,6]);//17