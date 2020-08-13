

var personnel = [
	{
		id: 5,
		name: "Luke Skywalker",
		pilotingScore: 98,
		shootingScore: 56,
		isForceUser: true,
	},
	{
		id: 82,
		name: "Sabine Wren",
		pilotingScore: 73,
		shootingScore: 99,
		isForceUser: false,
	},
	{
		id: 22,
		name: "Zeb Orellios",
		pilotingScore: 20,
		shootingScore: 59,
		isForceUser: false,
	},
	{
		id: 15,
		name: "Ezra Bridger",
		pilotingScore: 43,
		shootingScore: 67,
		isForceUser: true,
	},
	{
		id: 11,
		name: "Caleb Dume",
		pilotingScore: 71,
		shootingScore: 85,
		isForceUser: true,
	},

]

//get the total score of force users only
//so we filter first the personal who can't use the force
var person_force = personnel.filter(function(person){
	return person.isForceUser === true;
})
console.log(person_force);

//now we need to create an array containing the total score of each Jedi
var total_forcepers = person_force.map(function(v){
	return v.pilotingScore + v.shootingScore;
});
console.log(total_forcepers);

//now get the total using reduce

console.log(total_forcepers.reduce(function(acc, score){
	return acc +score;
},0));






