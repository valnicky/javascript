let o = {
	carId: 123,
	getId: function(){
		return this.carId;
	}
};
let p ={
	carId: 123,
	getId: function(prefix) {
		return prefix + this.carId;
	}
};

let b = {
	carId: 123,
	getId: function() {
		return this.carId;
	}
};


let newCar = { carId: 456 };

console.log( o.getId.call(newCar));

console.log( p.getId.apply(newCar, ['ID: '])); //with apply you can pass args

console.log(b.getId.bind(newCar)());

