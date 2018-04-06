 /*Calculate the Matrix Inverse of integer numbers (N*N).

Explanation of the exercice:
http://www.purplemath.com/modules/mtrxinvr.htm5

Function Name: matInverse(mat) {}

console.log(matInverse([ [1, 3, 3], [1, 4, 3], [1, 3, 4] ]));

Finally: Print the values of your Matrix Inverse our return the Matrix Inversa as you want. Your code must be able to work with any Matrix dimensions. But for this challenge you can test a Matrix 3 * 3 and 4 * 4.

Instructions:

Inside your code you should be able to create the identity Matrix that you’ll need to use to calculate the inverse.

You should use a Matrix identity or if you know another way to calculate the inverse you can use it’s up to you.

I recommend you don’t use mutations of row or columns because this will increase the difficult level. But If you want use mutations you can use.

You must do zero above and bellow the main diagonal. For do this you can use method of Gauss-Jordan.

Please Note: Try to understand the method don’t try to write code without understand the method before, because you will waste your time.*/

function transpose(mat){
	const arr = [];
    for (let i = 0, size = mat[0].length; i < size; i++) {
       arr.push([]);
       while (arr[i].length<size){
             arr[i].push( mat[arr[i].length][i] );	
       }
   } 
   return arr;
}

function getDet2(arr) { // get determ of 2x2
  if(arr.length>2)return 'error'
  let det_ = arr[0][0]*arr[1][1];
  return (det_-arr[0][1]*arr[1][0]);
}

function determ(mat) { // recoursive function
  let arr = [], det = null;
  for(let i = 0; i < mat[0].length; i++) {
    if(mat[0].length === 2){
      det = getDet2(mat);
    }else{
      arr.push([]);
      counter = 0;
      for(let x = 1; x <= mat.length-1; x++) {
        arr[i].push([]);
        for(let y = 0; y < mat[x].length; y++) {
         (y !== i)?arr[i][counter].push(mat[x][y]):'';
        }
        counter++;
      }
      (i===0)?det=(+(mat[0][i]))*determ(arr[i]): // recoursive call
      (i%2===0)?det+=mat[0][i]*determ(arr[i]):det-=mat[0][i]*determ(arr[i]);     
    }counter = 0;
  } // END MAIN FOR LOOP  
    return det;
}

function minors(mat) {
  let arr=[];
  let subArr = []
  let minrs = mat.map(x =>x.map(y=>y)); 
  if(minrs.length===2){
    minrs=minrs.map(a=>a.reverse()).reverse();
    minrs[0][1]=-minrs[0][1];
    minrs[1][0]=-minrs[1][0];
  }else{
  let count = 0, c;
  for (let x = 0; x < mat.length; x++) {
    for (let y = 0; y < mat.length; y++) {
      arr.push([]);
      c = arr.length-1
      for (let i = 0; i < mat.length; i++) {
          if(i!==x){
            arr[c].push([]);
            count = arr[c].length-1
            for(let i_ = 0; i_ < mat.length; i_++) {
              if(i_ !== y) {
                arr[c][count].push(mat[i][i_]);    
              }       
            }
          }     
      }
      if(arr[c].length!==2){
       minrs[x][y] =  determ(arr[c]);
      }else{
        minrs[x][y] = getDet2(arr[c]);     
      }
    }
  }
  }
  if(minrs.length===2){
    minrs=minrs.map(a=>a.reverse()).reverse();
    minrs[0][1]=-minrs[0][1];
    minrs[1][0]=-minrs[1][0];
  }else{
  for (let i = 0; i< minrs.length; i++) {
    for (let x = 0; x< minrs[i].length; x++) {
      if(i%2===0){
        if(x%2===0){
          minrs[i][x] = +minrs[i][x];
        }else{
          minrs[i][x] = -minrs[i][x];
        } 
      }else{
        if(x%2===0){
          minrs[i][x] = -minrs[i][x];
        }else{
          minrs[i][x] = +minrs[i][x];
        }    
      }
    }
  }
  }     
  return transpose(minrs);
}


function matInverse(matrix) {
  let determinant = determ(matrix);
  let minorMatrix = minors(matrix);
  console.log('Matrix is:', matrix.join('\n'));
  console.log('Determinant is:', determinant);
  console.log('Minor matrix:', minorMatrix.join('\n'));
  let inverseMatrix = minorMatrix.map(x => x.map(y => Math.round((y/determinant*100))/100) );
  console.log("Inverse Matrix:", inverseMatrix);
console.log("********************************");
  return minorMatrix
}

var arr1 = [ [1,2], [3,4] ];
matInverse(arr1)

 var arr2 = [ [2, 5, 7], [6, 3, 4], [5, -2, -3] ];
 matInverse(arr2)

var arr3 = [ [6,-5,8,4],[9,7,5,2],[7,5,3,7],[-4,8,-8,-3] ];
matInverse(arr3)