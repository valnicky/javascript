let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;

let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;

 
module.exports = {

  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};
