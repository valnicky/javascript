/*In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.*/



function aVeryBigSum(ar) {
    let init = 0;
    for (let i = 0; i < ar.length; i++) {
        init = init + ar[i];
    }
    return init;
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);