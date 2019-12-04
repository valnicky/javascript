//we have an array and we want only some elements in it
//we want one array for rebels and other for Empire

var pilots = [
	{
		id: 2,
		name:"Wedge Antilles",
		faction: "Rebels",

	},
	{
		id: 8,
		name: "Ciena Ree",
		faction: "Empire",
	},
	{
		id: 40,
		name: "Iden Versio",
		faction: "Empire",
	},
	{
		id: 66,
		name: "Thane Kyrell",
		faction: "Rebels",
	}

]


console.log(pilots.filter(function(pilot) {
	return pilot.faction === "Rebels";
}));


console.log(pilots.filter(function(pilot) {
	return pilot.faction === "Empire";
}));


pilots.filter(pilot => pilot.faction === "Rebels");