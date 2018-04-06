/*We have number of containers , every container contains a number of oranges, this number can be even or odd, the seller needs to populate the 
containers on the table but in a certain pattern, he needs to sort them from left to right in a ascending order but every two even number oranges 
containers should have one odd in between, odd containers also should be arranged in ascending pattern, if there are no more containers of one type, the 
seller would continue populating the containers of the type still present in ascending way till there are no more containers

Write a function that populates the containers in ascending pattern depending on the number of oranges taking in consideration the type of this 
number even or odd.

for example, the final result can be like this

the resulted array should start by even numbers and in between odd ones, great work
1First checked it is an array or not

2creating two variables one receive the even numbers and one for the odd ones then sorting both of them

3creating a for loop to target the odd indices which will represent the places of odd numbers

4using splice method to add the odd numbers to the odd indices

5concating a and b to be sure that if there are excess elements in any one of them to be added at the end of array

You can use sort as you want :grinning:
first i divide array into two arrays one for even numbers and the other one for odd numbers
i iterate over the even array when i reach odd index i check if there is odd numbers still then add number
if odd array contains elements after loop is finished i concatenate it to the first array

[0,3,12,7,22,13,28,17,42,53,50,54,72,76]*/

function run(x)
{
	let ev=[];
	let odd=[];

	for (let i=0; i<x.length; i++)
	{
		if (x[i]%2 === 0)  ev.push(x[i]);
		else odd.push(x[i]);
	}

	ev.sort(function(a,b){return a-b});
	odd.sort(function(a,b){return a-b});

	for (let i=0; i<ev.length; i++)
	{
		if (i%2 !== 0 && odd.length > 0)  ev.splice(i,0,Number(odd.splice(0,1)));
	}

	if (odd.length>0) ev=ev.concat(odd);

	return ev;

}

console.log(run([72,0,12,13,22,3,28,54,42,76,50,17,53,7]));  //[0,3,12,7,22,13,28,17,42,53,50,54,72,76]));