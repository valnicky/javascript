/*Remove All Copies
Write a function that remove all repeated elements in array represents the argument of the function, the remaining elements should be in the same
 order as original one.

For example
removeCopies([5,8,4,8,3,2,1,5]); // [4,3,2,1]
removeCopies([1,6,"a",6,"b",7,8,"a",1]); // ["b",7,8]*/

const removeCopies = (array) => array.filter((val, i) => (array.lastIndexOf(val) === i) && (array.indexOf(val) === i));

const removeCopie = arr => {
    const result = [];
    const blackList = [];
    // Loop through array
    for (let i = 0; i < arr.length; i++) {
        // If the element isn't in the result array or if the element has not been deleted before add it to the list
        if (result.indexOf(arr[i]) === -1 && blackList.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        } else {
            if (result.indexOf(arr[i]) !== -1)
                result.splice(result.indexOf(arr[i]), 1);
            // Adding it to the black list, makes sure it works even if more than two duplicates are given
            // Otherwise it will only work if 2 copies of same element is given, on three it will break the purpose
            blackList.push(arr[i]);
        }
    }
    return result;
};

console.log(removeCopies([5,8,4,8,3,2,1,5])); // [4,3,2,1]
console.log(removeCopies([1,6,"a",6,"b",7,8,"a",1])); // ["b",7,8]

console.log(removeCopie([5,8,4,8,3,2,1,5])); // [4,3,2,1]
console.log(removeCopie([1,6,"a",6,"b",7,8,"a",1])); // ["b",7,8]