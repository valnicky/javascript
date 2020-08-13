var a = 'Hi, how are you?';

function name() {

	return a + ' fine ';
}

console.log(name());

var distancia = 100;

var calcdistancia = function(d) {
	if (d <= distancia) {
		return ' Está cerca';
	} else {
		return 'Está lejos';
	}


}

console.log(calcdistancia(9));
console.log(calcdistancia(120));

var arreglo = [6, 'hello you', [5, 8, 6], true];

arreglo.splice(3, 0, ['otro']);

console.log(arreglo[3]);
console.log(arreglo);


/******iterar con un for la lista******************/

var lista = new Array(3, 4, 5, 6, 7, 8);

for(var i= 0; i < lista.length; i ++) {
	lista[i] = lista[i] + 1;
}

console.log(lista);


/***lo mismo pero con while**/
var j = 0;
while( j < lista.length ) {
	console.log(j);
	lista[j]++;
	j++;
}

console.log(lista);


/**areglos multidimensionales con filas y columnas**/

var grilla = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log();

console.log('grilla ' + grilla[2][1]);

for(var k = 0; k < grilla.length; k++){
	for(var m = 0; m < grilla[0].length; m++){
		console.log(grilla[k][m]);
	}
	
}


/**objetos**/
var obj = new Object();

obj.nombre = "tu nombre";
obj['edad'] = 99;

console.log(obj.nombre + obj['edad']);

obj.sumar = function(x, y) {
	return x + y;
}

console.log(obj.sumar(6, 8));










