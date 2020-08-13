function Shape() {
	this.area = function() {
		return "You need to implement this!"
	}
}

function Square(length) {
	this.length = length;
	this.area = function() {return this.length * this.length;}
}

function Rectangle(height, width){
	this.height = height;
	this.width = width;
	this.area = function(){return this.height * this.width;}
}

Square.prototype = new Shape();
Rectangle.prototype = new Shape();


console.log(new Square(2).area());

console.log(new Rectangle(2, 6).area());

function Circle(r) {
	this.area = function(){return Math.PI * r * r;}
}

var a = new Circle(2);
console.log(a.area());

var b = Circle(2); 
/*console.log(b.area()); -> error bc of lack of new when declare b*/

console.log(area());/* the area property gets defined in the window object bc the new keyword was not used with the function constructor*/






