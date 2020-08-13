const andrew = {
  name: 'Andrew'
};

function introduce(language) {
  console.log(`I'm ${this.name} and my favorite programming language is ${language}.`);
}

//'I'm Andrew and my favorite programming language is JavaScript.'

introduce.call(andrew, 'JavaScript');