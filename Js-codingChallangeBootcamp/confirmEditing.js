/**write a function that takes a string and a character , if the string ends with the character then return true else return false */

function confirm_editing(str, char){
    let longStr = str.length - 1;
  //  console.log(longStr);
    let lastChar = str.slice(longStr);
   // console.log(lastChar);
    if(lastChar == char){
        return true;
    }else {
        return false;
    }
}

function confirm_editing2(str, char) {
    let reversed = str.split("").reverse();
    return reversed[0] === char;
}


confirm_editing2('hello', 'o');
confirm_editing('buddy', 'x');