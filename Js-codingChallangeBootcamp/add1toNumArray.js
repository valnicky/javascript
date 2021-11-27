/**write a function that takes an array add one to the number represented as an array return the new array */


function adder(arr){
   let str = arr.join(""); //console.log(str);
   let calc = parseInt(str)+1;
   let num = calc.toString().split('');
   return num.map((el) => {
       return parseInt(el)
   }) ;
}

adder([9,9,9]); // [1,0,0,0]   999+1 = 1000
adder([1,2,9]); //[1,3,0] 129+1 = 130
