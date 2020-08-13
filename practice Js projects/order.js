const Menu = require('./modules.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();

const Airplane = require('./modules.js');
console.log(Airplane.displayAirplane());