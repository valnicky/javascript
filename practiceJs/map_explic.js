/*we have*/
var officers = [
	{ id: 20, name: 'Captain Piett'},
	{ id: 24, name: 'General Veers'},
	{ id: 56, name: 'Admiral Ozzel'},
	{ id: 88, name: 'Commander Jerjerrod'}
];


//we need [20, 24, 56, 88] only the ids

console.log(officers.map(function(officer){
	return officer.id;
}));

//or with forEach and an empty array
var officersIds = [];

officers.forEach(function(officer){
	officersIds.push(officer.id);
});

console.log(officersIds);

//map always returns an array with the same length as the original array

const officersId = officers.map(officer => officer.id);

console.log(officersId);

