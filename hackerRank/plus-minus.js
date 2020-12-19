/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
6
-4 3 -9 0 4 1 
There are 3 positive numbers,  2 negative numbers, and 1  zero in the array.
The proportions of occurrence are positive: 3/6=0.5000000, negative:  2/6= 0.333333 and zeros: 1/6=0.1666667. */

function plusMinus(arr) {
    let nums = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }

    }
    // console.log('pos: ' + pos + ' neg: ' + neg + ' zero: ' + zero);

    let posPor = (pos / nums).toFixed(6);
    let negPor = (neg / nums).toFixed(6);
    let zeroPor = (zero / nums).toFixed(6);

    console.log(posPor);
    console.log(negPor);
    console.log(zeroPor);
}

plusMinus([-4, 3, -9, 0, 4, 1]);