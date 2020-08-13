/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

/*for (const member of members) {
     console.log(members);
}*/
let mapIterator = members.entries();
//console.log(members.entries());

 for (let [key, value] of mapIterator) {
     console.log(key, value);
 }

/*OR directamente*/
 for(const [key, value] of members){
 	console.log(key, value);
 }

 members.forEach((value, key) => console.log(key, value));