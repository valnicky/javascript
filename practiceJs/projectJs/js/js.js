let modify = document.getElementById('modify');
let elements = document.getElementsByName('nameProperty');

function set() {
	
	for(let i =0; i< elements.length; i++) {
		let cssProperty = elements[i].getAttribute('id');
		let cssValue = elements[i].value;
		
		modify.style[cssProperty] = cssValue;          
	}
		
}

document.getElementById('btnSet').addEventListener('click', set);


