/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

function miniMaxSum(arr) {
    let temp = 0;
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // console.log(arr);

    for (let k = 0; k < arr.length - 1; k++) {
        minSum += arr[k];
    }

    for (let r = 1; r < arr.length; r++) {
        maxSum += arr[r];
    }
    console.log(minSum + ' ' + maxSum);

}

miniMaxSum([1, 5, 3, 2, 4]);
miniMaxSum([10, 52, 23, 34, 5]);