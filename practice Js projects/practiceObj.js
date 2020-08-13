//Using the initial list above, create an object literal(hash/dictionary) that contains the 
//color name as the key and the length as the value.

let colors = ['red','orange','yellow','green','blue','purple'];
let longitud = [];
for (let i = 0; i < colors.length; i++) {
		longitud.push(colors[i].length);
	}


let obj = {
	red: 3,
	orange: 6,
	yellow: 6,
	green: 5,
	blue: 4,
	purple: 6
};

console.log(obj);


//Iterate through the dictionary and remove all color entries with a length < 5


//Iterate over the initial list of colors, printing true or false if the color is found in 
//he dictionary.

let alarm;
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
    return "Hello, there!";
  },
  sayGoodbye: () => {
     return "Goodbye!";
   }
};
console.log(person.sayHello());
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);

let day= "Sunday";

if(day === "Saturday"|| day === "Sunday"){
   alarm = 'weekendAlarm';
   }else{
     alarm = 'weekAlarm';
   }
console.log(person[alarm]);
person.hobbies = ['skating','basketball'];
console.log(person.hobbies);
person.hobbies = ['football'];
console.log(person.hobbies);

let person2 = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
  
};

console.log(person2.sayHello());

person2.hobbies = ['Basketball', 'Coaching'];
person2.hobbies = ['Basketball'];
console.log(person2.hobbies);


console.log(person2['name']);
console.log(person2['age']);

console.log(person2[alarm]);


let person3 = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};


person3.age = 'Thirty-nine';
person3.age = 39;

console.log(person3.age);