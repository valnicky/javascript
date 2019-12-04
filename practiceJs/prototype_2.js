'use strict';
//a prototype is an object that exists in every function in js
/*
	a function's prototype: a function's prototype is the object 
	instance that will become the prototype for all objects 
	created using this function as a constructor
*/
/*an object's prototype: an object's prototype is the object instance
from which the object is inherited*/

var arr = ['red', 'blue', 'green']

Object.defineProperty(Array.prototype, 'last', {get: function(){
	return this[this.length-1]
}})

var last = arr.last
console.log(last)

var arr2 = ['one', 'two', 'three']
console.log(arr.last)
console.log(arr2.last)

var myFunc = function() {}
console.log(myFunc.prototype)

var cat = {name: 'Fluffy'}
console.log(cat.__proto__);

function Cat(name, color) {
	this.name = name
	this.color = color
}
var fluffy = new Cat("Fluffy", 'White')
console.log(Cat.prototype)
console.log(fluffy.__proto__)

console.log(Cat.prototype === fluffy.__proto__)

Cat.prototype.age = 3

var muffin = new Cat('Muffin', 'Brown')

console.log(muffin.__proto__)






