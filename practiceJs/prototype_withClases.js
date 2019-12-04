'use strict';

class Animal {
	constructor(voice){
		this.voice = voice || 'grunt'
	}

	speak() {
		console.log(this.voice)
	}
}