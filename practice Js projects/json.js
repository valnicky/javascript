//JSON

var user = {
	name: "Peter",
	age: 41,
	country: 'Germany',
	pets: ['white', 'black'],
	perfil: {
		type: 'private',
		account: 'premium'
	}
};

console.log(user.perfil.account);

if('city' in user ) {
	console.log('the user has a city ');
} else {
	console.log("the user hasn't a city");
}