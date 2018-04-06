/*You are a graphic designer and you always feel upset of how many triangles you create in the project you work on, so you got an idea :thinking: 
to write a javascript function that every time you call it, generates 3 values represent the angles of this triangle, but you do not need any of 
these angels to be less than 30 degrees, your function should return every time 3 random values represent the angles, and of course you need sum 
of them to be 180 every time 
:wink:

for Example

triangle(); // 60,40,80

let anngl1 = Math.floor(Math.random() * (120-30)  + 30);

let angl2 = Math.floor(Math.random() * (120-angl1-30) + 30);

let angl3 = 180 - (angl1 + angl2);
*/


function triangle(){
  let angl1 = Math.floor(Math.random() * (180-60) +30); 
  let angl2 = Math.floor(Math.random() * (180-30-angl1) +30);

  let angl3 = 180 - (angl1 + angl2);       
       
  return ("First angle is " + angl1 +", \nSecond angle is "+ angl2+", \nThird angle is  "+ angl3); 
} 

console.log(triangle());


