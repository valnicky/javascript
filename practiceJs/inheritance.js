class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get usesLitter() {
    return this._usesLitter;
  }

  get behavior() {
    return this._behavior;
  }  

  incrementBehavior() {
    this._behavior++;
  }
}

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

class Doctor{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
   takeVacationDays(){
     
   }
}

class Nurse{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  takeVacationDays(){
    
  }
  addCertification(){
    
  }
}

class HospitalEmployee{
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
 get remainingVacationDays(){
  return this._remainingVacationDays;
}
  
  takeVacationDays(daysOff){
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}