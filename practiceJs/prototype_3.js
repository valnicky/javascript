'use strict'

function Cat(name, color) {
	this.name = name
	this.color = color
}

Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

fluffy.age = 5

console.log(muffin.age)
console.log(fluffy.age)

console.log(fluffy.__proto__.age)

console.log(Object.keys(fluffy))
console.log(fluffy.hasOwnProperty('age'))

/**********/
console.log('/******************/')

Cat.prototype.age = 1

var blacky = new Cat('Blacky', 'Black') //was created before asignate 5
var whity = new Cat('Whity', 'white')

Cat.prototype = {age: 5}

var greysy = new Cat('Greysy', "Grey")


console.log(blacky.age)
console.log(whity.age)
console.log(greysy.age)
console.log(Cat.prototype.age)

console.log(blacky.__proto__)
console.log(blacky.__proto__.__proto__)











