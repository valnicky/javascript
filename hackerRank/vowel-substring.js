/*
 * Complete the 'findSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 returns a substring of the k length of major length with max vowels
 */

function findSubstring(s, k) {
    // Write your code here
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let times = 0;
    let sbstr;
    let arr = [];
    let maxVow;
    let maxFin = 0;
    let maxN;
    let result;

    for (let i = 0; i < s.length; i++) {
        if ((k + i) <= s.length) {
            sbstr = s.substring(i, k + i);
            // console.log( sbstr);
            arr.push(sbstr);
        }
    }
    // console.log(arr);

    for (let r = 0; r < arr.length; r++) {
        //  console.log(arr[r]);
        maxN = 0;
        for (let s = 0; s < arr[r].length; s++) {
            //console.log(arr[r][s]);

            for (let j = 0; j < vowels.length; j++) {
                if (arr[r][s] === vowels[j]) {
                    // console.log(arr[r][s] );
                    maxN++;

                    if (maxN > maxFin) {
                        maxFin = maxN;
                        maxVow = arr[r];
                    }
                }
            }
        }


    }
    // console.log(maxVow+'  '+ maxFin);
    if (maxFin === 0) {
        maxVow = 'Vowel not Found!';
    }
    result = maxVow;
    return result;

}

findSubstring('azerdii', 5);
findSubstring('caberfidetefg', 5);