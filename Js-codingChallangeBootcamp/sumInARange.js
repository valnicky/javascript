/**write a function that takes range of a number "9-11" return the sum of number in between of the range */

function sumInRange(strR){
    let strCnge = strR.split('-');
    let firstNum = parseInt(strCnge[0]) ;
     let lastNum = parseInt(strCnge[1]) ;
     let result = 0;
     for(let i = firstNum; i <= lastNum; i++){
         result += i;
       //  console.log(result);
     }
  //  console.log(result);
  return result;
}

sumInRange("1-4");//10
sumInRange("10-20");//165