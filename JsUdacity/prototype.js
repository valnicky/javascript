function Dalmatian (name) {
  this.name = name;
}

Dalmatian.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

function Phone() {
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;


//new obj
const myPhone = new Phone();

const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);//true

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);// false