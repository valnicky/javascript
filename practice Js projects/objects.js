var cat = {name:"Fluffy", color:"White"};
cat.age = 3;

cat.speak = function() { display('Meeooow')}
cat['Eye Color'] = 'Green';

console.log(cat.color);
console.log(cat);


function Cat(name, color) {
	this.name = name;
	this.color = color;
}
var cat1 = new Cat("Poppy", 'black');

console.log(cat1);

Object.defineProperty(cat, 'name', {writable:false})
console.log('object.getOwnpropdesc'+ Object.getOwnPropertyDescriptor(cat, 'name'))

Object.defineProperty(cat, 'name', {enumerable: true})

for(var propertyName in cat) {
	console.log(propertyName + ':' + cat[propertyName])
}

Object.keys(cat);
console.log('******************************************/');

console.log(JSON.stringify(cat));

console.log('***********************************');
delete cat.name;
//we can create a new object with Object.create()

var cat2 = Object.create(Object.prototype, {
	name: {
		value: "Fluffy",
		enumerable: true,
		writable: true,
		configurable: true
	},
	
	color: {
		value:"White",
		enumerable:true,
		writable: true,
		configurable:true
	}
	
})

console.log(cat2);

//create objects using Class
class Catt {
	constructor(name, color){
		this.name = name
		this.color = color
	}
	speak() {
	console.log('Meeooow')
	}
}

var catClasse = new Catt("Mewy", "brown");

console.log(catClasse);

catClasse.speak();


console.log('---------------------------------------------');

var cat3 = {
	name: {first: 'Fluffy', last: 'LaBeouf'},
	color: 'White'
}

Object.defineProperty(cat3, 'fullName',
{
	get: function() {
		return this.name.first + ' ' + this.name.last 
	},
	set: function(value){
		var nameParts = value.split(' ')
		this.name.first = nameParts[0]
		this.name.last = nameParts[1]
	}
})

console.log(cat3.fullName);
cat3.fullName = 'Muffin Top'

console.log(cat3.fullName);
console.log(cat3.name.first);
console.log(cat3.name.last);









