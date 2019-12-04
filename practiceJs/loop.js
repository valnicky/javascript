let i=0;
for (; i<12; i++){
	if(i === 8) {
		break;
	}
}

console.log(i);

/******************/

for(let j=0; j<4; j++) {
	if(j === 2) {
		continue;
	}
	console.log(j);
}

console.log('/***************************/');

for(let i=0; i<5; i++) {
	console.log(i);
	if(i === 3)  //it skips 4 bc of the break 3
		break;
}

for(let i=0; i<5; i++) {
	
	if(i === 3)  //it skips 3 bc of the continue 3
		continue;
	console.log(i);
}



