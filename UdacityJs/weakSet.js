 /*WeakSet can only contain objects
is not iterable which means it can’t be looped over
does not have a .clear() method */ 

let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

student3 = null;
console.log(roster);



const uniqueFlavors = new WeakSet();
let flavor1 = {flavor: 'chocolate'};
let flavor2 = {flavor: 'vanilla'};

uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);

uniqueFlavors.add(flavor1);