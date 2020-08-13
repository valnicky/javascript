let totalTrains = 12;
let trainsOperational = 8;

let trainNumber = 1;

while(trainNumber <= trainsOperational) {
	console.log("Train #" + trainNumber + " is running.");
	trainNumber++;
	}

for(let stoppedTrain = trainsOperational +1; stoppedTrain <= totalTrains; stoppedTrain++){
	console.log("Train #" + stoppedTrain + " is not operational.")
}
console.log('/*************/');


for(let trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
	if(trainNumber <= trainsOperational){
		console.log("Train #" + trainNumber + " is running.");
	}else {
		console.log("Train #" + trainNumber + " is not operational.");
	}

}