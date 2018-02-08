/*The problem of the day, Object,Object,Object :grinning:

Write a function that takes an object with array of numbers values as argument, the function should remove all odd numbers if existed in any array

For example

removeOdd({a:[1,2,-5,7],b:[3,-7,2,10],c:[6,4,4,2],d:[1,17,21,1,0]})// {a:[2],b:[2,10],c:[6,4,4,2],d:[0]}
*/


  function removeOdd(obj){
        for (let item in obj){
      		for (let i = obj[item].length; i--; ) {
      			if(obj[item][i] % 2 !== 0){
                           obj[item].splice(i,1);
                     }
      	       }
       }
  return obj;
   }
    console.log(removeOdd({a:[1,2,-5,7],b:[3,-7,2,10],c:[6,4,4,2],d:[1,17,21,1,0]}));// {a:[2],b:[2,10],c:[6,4,4,2],d:[0]


    	function removeOdd(obj){
  Object.keys(obj).forEach(key => obj[key] = obj[key].filter(elem => !(elem % 2)));
  return obj;
}


console.log(removeOdd({a:[1,2,-5,7],b:[3,-7,2,10],c:[6,4,4,2],d:[1,17,21,1,0]}));// {a:[2],b:[2,10],c:[6,4,4,2],d:[0]}

function removeOdd(obj) {
    for (prop in obj)
        obj[prop] = obj[prop].filter(x => x % 2 === 0);
    return obj;
}
