/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.
The first line contains a single integer,n , the number of rows and columns in the square matrix arr.
Each of the next  n lines describes a row,arr[i] , and consists of  n space-separated integers arr[i][j].
*/

function diagonalDifference(arr) {
    const dim = arr[0].length;
    let first_diag = 0;
    let sec_diag = 0;
    let sum = 0;

    for (let i = 0, j = (dim - 1); i < dim, j > -1; i++, j--) {
        first_diag += arr[i][i];
        sec_diag += arr[i][j];
    }
    sum = first_diag - sec_diag;
    if (sum >= 0) {
        return sum;
    } else if (sum < 0) {
        return sum * (-1);
    }

}


diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]);