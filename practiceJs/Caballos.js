/*=========
El caballo de Mac es más oscuro que el de Smith, pero
 más rápido y más viejo que el de Jack, que es aún más lento
 que el de Willy, que es más joven que el de Mac, que es más
 viejo que el de Smith, que es más claro que el de Willy,
aunque el de Jack es más lento y más oscuro que el de Smith.
¿Cuál es el más viejo, cuál el más lento y cuál el más claro?
============
mac >oscuro Smith
mac >rapido Jack
mac >viejo jack
jack <rapido Willy
jack <viejo Mac
jack >viejo Smith
jack <oscuro Willy
jack <rapido Smith
jack >oscuro Smith

 */

 var a={

 	oscuroMac:0,
 	oscuroSmith:0,
 	oscuroJack:0,
 	oscuroWilly:0,

 	result: function(){

 		if(
 			a.oscuroMac > a.oscuroSmith &&
 			a.oscuroJack> a.oscuroWilly &&
 			a.oscuroJack > a.oscuroSmith
 			){
 			return true;
 		}
 		return false;
 	},

 	interval: setInterval(function(){
 		a.oscuroMac= Math.ceil(Math.random()*4)
 		a.oscuroSmith= Math.ceil(Math.random()*4)
		a.oscuroJack=Math.ceil(Math.random()*4)
		a.oscuroWilly=Math.ceil(Math.random()*4)

	if(a.result()){
		clearInterval(a.interval);
		console.log("Mac oscuro "+ a.oscuroMac)
		console.log("Smith oscuro "+ a.oscuroSmith)
		console.log("Jack oscuro "+ a.oscuroJack)
		console.log("Willy oscuro "+ a.oscuroWilly)
	}

 	},10)


 }