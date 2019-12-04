var data = [
{
	name: "Jan Dodonna",
	title: "General",
},{
	name: "Gial Ackbar",
	title: "Admiral",
},
]


var names = data.map(function(format){
	return format.name + ' ' + format.title;
});

console.log(names);