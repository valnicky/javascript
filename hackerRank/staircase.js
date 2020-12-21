/*Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n . */
/*N=4
sss# i=0 s=3 #=1
ss## i=1 s=2 #=2
s### i=2 s=1 #=3
#### i=3 s=0 #=4
S= N-i-1
#= i+1
 */
function staircase(n) {

    for (let i = 0; i < n; i++) {
        let spa = '';

        for (let j = 0; j < n - 1 - i; j++) {
            spa += ' ';
        }
        for (let k = 0; k < i + 1; k++) {
            spa += '#';
        }
        console.log(spa);

    }
}

staircase(6);
staircase(4);



function staircase2(n) {

    for (let i = 0; i < n; i++) {
        let spa = '';

        for (let j = 0; j < i; j++) {
            spa += ' ';
        }
        for (let k = 0; k < i + 1; k++) {
            spa += '*';
        }
        console.log(spa);

    }
}

staircase2(6);
staircase2(4);


function staircase3(n) {

    for (let i = 0; i < n; i++) {
        let spa = '';

        for (let j = n; j > i; j--) {
            spa += ' ';
        }
        for (let k = 0; k < i + 1; k++) {
            spa += '*';
        }
        console.log(spa);

    }
}

staircase3(6);
staircase3(4);