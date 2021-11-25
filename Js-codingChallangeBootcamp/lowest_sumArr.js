/**write a function that takes an array and return lowest sum of two elements of the array */

function lowest_sum(arr){
     let sortArr =  arr.sort((a, b) =>  a-b);

    return sortArr[0] + sortArr[1];
}

lowest_sum([4,3,9,8,2,1]);
lowest_sum([100,400,140,345,245]);

function max_sum(arr){
    arr.sort((a,b) => b-a);
    return arr[0]+arr[1];
}
max_sum([4,3,9,8,2,1]);
max_sum([100,400,140,345,245]);