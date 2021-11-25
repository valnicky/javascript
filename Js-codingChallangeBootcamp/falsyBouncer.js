/**write a function that takes an array remove all the falsy elements from the array and return the array */

function bouncer(arr){
 //   let arrFalsy = [' ',0, false, null, undefined];
    let arrNew= [];
     
          for(let a of arr){
              if(a){
                  arrNew.push(a);
                  console.log(a);
              }
              
       }
       return arrNew;
}


function bouncer2(arr){
   return  arr.filter((el)  => {
        return el;
    });
}

bouncer([1,2,3,'',0,false,null, undefined]); // [1,2,3]
bouncer2([1,2,3,'',0,false,null, undefined]); 
