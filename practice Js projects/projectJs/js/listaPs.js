//1. Obtener la lista de elementos de etiqueta <p>

var parr = document.getElementsByTagName('p');

// y  mostrarlos en un alert js
var result = [];
for(var i = 0; i< parr.length; i++) 
	{result += parr[i].innerHTML; 
		
	}
alert(result);	


//2. Añadir un nuevo elemento <p>


var p = document.createElement('p');

// con el texto 'Texto del nuevo parrafo'
p.innerHTML = 'Texto del nuevo parrafo';

//y que sea hijo del body
var bo = document.querySelector('body');
bo.appendChild(p);


