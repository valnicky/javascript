/** write  a function that takes a number(must be positive) return the sum of all number */

function counter(num) {
    if(num <= 0){return}
   let strNum =  num.toString();
   let newStrNum = strNum.split('');
   console.log(newStrNum);
   let sum = 0;
   for(let i= 0;i < newStrNum.length ; i++){
       sum += parseInt(newStrNum[i]);
   }
   
   console.log(sum);
}
counter(123);
counter(3456);