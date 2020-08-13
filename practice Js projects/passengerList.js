let passengerList = [];

passengerList = addPassenger("Gregg Pollack", passengerList);

function addPassenger(name, list) {
	if(list.length == 0){
		list.push(name);
		return list;
	} else {
		for(let i = 0; i < list.length; i++) {
			if(list[i] == undefined){
				list[i] = name;
				return list;
			} else if(i == list.length-1){
				list.push(name);
				return list;
			}
		}
	}
}


passengerList = addPassenger("Ashley Smith", passengerList);
console.log(passengerList);

function deletePassenger(name, list) {
	if(list.length ==0 ){
		console.log("List is empty!");
	} else {
		for(let i = 0; i< list.length; i++) {
			if(list[i] == name) {
				list[i] = undefined;
				return list;
			} else if (i == list.length -1) {
				console.log("Passenger not found!");
			}
		}
	}
	return list;
}

passengerList = deletePassenger("Ashley Smith", passengerList);

console.log(passengerList);