/**write a function that takes an array return ascending order of the array and desc */

function asc(arr){
    return arr.sort((a,b) => {
        return a-b;
    })

}

asc([1,4,2,3]);
asc([100,90,20,15,43,23]);

function desc(arr){
    return arr.sort((a, b) => {
        return b-a;
    })
}


desc([1,4,2,3]);
desc([100,90,20,15,43,23]);