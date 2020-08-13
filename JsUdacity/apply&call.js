/*call() invokes the function and has arguments passed in individually, separated by commas.
apply() is similar to call(); it invokes the function just the same, but arguments are passed in as an array.
bind() returns a new function with this bound to a specific object, allowing us to call it as a regular function.*/

const dave = {
  name: 'Dave'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}. You're looking well today.`);
}

sayHello.apply(dave, ['Hello'] );

sayHello.call(dave, 'Hello');