/**write a function which takes an integer  and return reversed of that integer */

function intReverse(num){
    let reversed = num.toString().split('').reverse().join('');
    if(num < 0){
        reversed = parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}
//or return parseInt(reversed) * Math.sign(num);
intReverse(123) //321
intReverse(-254)// -452 


