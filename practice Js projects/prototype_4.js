'use strict';

function Animal(voice) {
	this.voice = voice || 'grunt'
}

Animal.prototype.speak = function() {
	display(this.voice)
}

function Cat(name, color) {
	Animal.call(this, 'Meow')
	this.name = name
	this.color = color
}

Cat.prototype = Object.create(Animal.prototype)

var fluffy = new Cat('Fluffy', 'White')

console.log(fluffy instanceof Cat)
console.log(fluffy instanceof Animal)

console.log(fluffy.__proto__)

Cat.prototype.constructor = Cat //fluffy is a Cat now
console.log(fluffy.__proto__)

console.log(fluffy.__proto__.__proto__) //the proto of proto of fluffy is Animal

console.log(fluffy.__proto__.__proto__.__proto__) //and the proto of all them is an Object




