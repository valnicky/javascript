const Andrew = {
  name: 'Andrew',
  introduce: function () {
    console.log(`Hi, my name is ${this.name}!`);
  }
};
const Richard = {
  name: 'Richard',
  introduce: function () {
    console.log(`Hello there! I'm ${this.name}.`);
  }
};

Richard.introduce.call(Andrew);