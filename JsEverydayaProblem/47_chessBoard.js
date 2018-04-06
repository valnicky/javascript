/*Chess Board
Write a function that takes a number as argument and returns a string

The number represents the size of a chess board we need to draw, for example if the number is 8 we need to create grid of size 8 * 8

When the number is 8, printing the string resulted should exactly produce something exactly like this:
For Example

makeGrid(8);//

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # */

 function chessBoard(num) {
    	let string = '';
    	for (let x = 0; x < num; x++){
      	for (let y = 0; y < num; y++){
        		string += (x%2===0)?(y%2===0)?' ':'#':(y%2===0)?'#':' ';
        }
        string += '\n'
      }  
    	console.log(string);
    }
   console.log( chessBoard(8));

function makeGri(num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += ((i + j) % 2) ? '#' : ' '; 
    }
    result += '\n';
  }
  return result;
}

console.log(makeGri(8));

function makeGrid(size) {
  let output = "";
  
  for(i=0; i<size; i++) {
    for(j=0; j<size; j++) {
      output += ((i+j) % 2 === 0) ? " " : "#";
    }
    output += "\n";
  }

  return output;
}